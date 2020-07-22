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
    const lines = [];
    let numOfProblems = 0;
   for (let i =0; i<n ; i++){
       let line = readline().split(' ').map(x=>parseInt(x));
       let sum = 0 ;
       line.forEach((num) => sum += num)
       if (sum >=2) numOfProblems ++
   }
console.log(numOfProblems)

}

