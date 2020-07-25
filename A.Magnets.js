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
    let n = parseInt(readline());
    let current = '';
    let numOfGroups = 0;
    for (let i = 0 ; i < n ;i++){
        let line = readline();
        if (current != line) numOfGroups ++;
        current =line;
    }
console.log(numOfGroups);
}

