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
    const n = parseInt(readline()), line2 = readline()
    let d = 0, a =0;
    for (var i = 0 ; i < n;i++){
        (line2[i] === 'A') ? a ++ : d ++ ;
    }
    let result = 'Friendship';
    if (a > d) result = "Anton"
    else if (d > a) result = "Danik"

    console.log(result)
}

