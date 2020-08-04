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
    readline();
    let s = readline();
    let n = 0;
    for (let i = 0 , c = s.length -1 ; i<c ; i++){
        if (s[i] == s[i+1])  n++
    }

    console.log(n)

}

