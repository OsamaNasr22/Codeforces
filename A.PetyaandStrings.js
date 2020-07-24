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
 let s2 = readline().toLowerCase();
let output = 0;

 for (let i =0,c=s1.length ; i < c  ; i++ ){
     if (s1[i].charCodeAt(0) > s2[i].charCodeAt(0)) {
         output = 1; break;
     }
     else if (s1[i].charCodeAt(0) < s2[i].charCodeAt(0)){
         output = -1 ; break;
     }
 }

console.log(output)

}

