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
    const stips = readline().split(' ').map(x => parseInt(x))
    const s = readline();
    let calories =0 ;
    for (let i = 0, c = s.length ; i< c ; i++ ){
        calories += stips[s[i]-1];
    }
    console.log(calories);
}

