'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {
  const [price , r] = readline().split(" ")
  let minPurchases =1
  let totalPrice = 0
  while (true){
     totalPrice =  price * minPurchases
    if (totalPrice % 10 == 0 || (totalPrice -r)%10 ==0) break
    minPurchases++
  }

  console.log(minPurchases)
}
