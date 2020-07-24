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
    let s1 = readline().toLowerCase();
    let length = [];
    for (let i =0,c=s1.length ; i < c  ; i++ ){
     if (length.indexOf(s1[i]) === -1 ) length.push(s1[i])
    }

    console.log((length.length % 2 === 0 ) ? "CHAT WITH HER!": "IGNORE HIM!")
}

