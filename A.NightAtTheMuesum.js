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
    const string = readline().toLowerCase();
    let pointer = 'a';
    let round = 0 ;
    for (let i =0 , c = string.length   ; i < c ; i++) {
        let clockwise =(Math.abs(parseInt(pointer.charCodeAt(0)) - parseInt(string[i].charCodeAt(0))));
        let counterclockwise = Math.abs(26 - clockwise);
        round += (clockwise < counterclockwise) ? clockwise : counterclockwise
        pointer = string[i]
    }
    console.log(round)
}

