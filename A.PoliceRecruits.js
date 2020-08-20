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
    const events =   parseInt(readline());
    const values = readline().split(' ').map(x => parseInt(x));
    let availableOfficer = 0 ;
    let crimes = 0 ;
    for (let i = 0 ; i < events ; i++){
        if (values[i] > 0){
            availableOfficer += values[i];
        }else {
            let crime = Math.abs(values[i]);
           let isCrime = availableOfficer - crime
            availableOfficer = (isCrime < 0 ) ? 0 : isCrime
            if (isCrime < 0) crimes += crime;
        }
    }
    console.log(crimes);
}

