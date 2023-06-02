const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Implement authentication using JWT
app.post('/api/login', (req, res) => {
  // Authenticate the user and generate an access token
  const username = req.body.username;
  const password = req.body.password;

  // Check the user's credentials and generate a JWT token
  const user = { username: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

// Generate a private URL for the image
app.get('/api/image', authenticateToken, (req, res) => {
  const imageUrl = 'localhost/images/image.jpg';
  const privateUrl = `${imageUrl}?access_token=${req.accessToken}`;
  res.json({ privateUrl: privateUrl });
});

// Serve the image using the private URL
app.get('/images/image.jpg', authenticateToken, (req, res) => {
  const imageUrl = 'localhost/images/image.jpg';

  // Validate the access token before serving the image
  if (req.accessToken) {
    fs.readFile(imageUrl, (err, data) => {
      if (err) {
        res.status(404).send('Image not found');
      } else {
        res.contentType('image/jpeg');
        res.send(data);
      }
    });
  } else {
    res.status(401).send('Unauthorized');
  }
});

// Middleware function to authenticate the access token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.accessToken = token;
    next();
  });
}

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
