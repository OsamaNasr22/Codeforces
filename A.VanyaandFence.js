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
    const line1 = readline().split(' '), line2 = readline().split(' ')

    let h = parseInt(line1[1]),widthOfRoad = 0;

    for (let heightOfPerson of line2){
        widthOfRoad += (heightOfPerson > h) ? 2 : 1;
    }
    console.log(widthOfRoad)
}

