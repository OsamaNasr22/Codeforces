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
   const matrix = [];
   let minNumOfSwap;
   for( let i = 0 ; i < 5 ; i++){
       matrix[i] = readline().split(' ').map(x => parseInt(x))
   }


   for (let i=0 ; i <5 ;i++){
       for (let j =0 ; j < 5 ; j++){
           if (matrix[i][j] === 1 ){
               minNumOfSwap = Math.abs( i - 2) + Math.abs(j -2);
               break;
           }
       }
   }
    console.log(minNumOfSwap)

}

