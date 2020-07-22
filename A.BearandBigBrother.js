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
    const weights = readline().split(' ').map(x => parseInt(x))
    let year = 0;
    while (weights[0] <= weights[1]){
        weights[0] *=3;
        weights[1] *=2;
        year ++;
    }
    console.log(year)
}
