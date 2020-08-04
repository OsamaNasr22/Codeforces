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
    let n = readline().toLowerCase();
    let cards = readline().split(' ').map(x => parseInt(x));
    let DimaTurn = false;
    let dimaSum = 0;
    let serejaSum = 0;


    while (cards.length != 0){
       let num = cards[cards.length -1] >= cards[0] ? cards.pop() : cards.shift();
       if (DimaTurn) dimaSum +=num
        else serejaSum+= num;

        DimaTurn = !DimaTurn
    }


    console.log(serejaSum, dimaSum)

}

