const s = "MCMXCIV"

const roman = {
  "I" : 1,
  "V" : 5,
  "X" : 10,
  "L" : 50,
  "C" : 100,
  "D" : 500,
  "M" : 1000
}
let i =0
let sum = 0

while(i < s.length){
  if(s[i] === "I"){
    if(s[i+1] === "V" || s[i+1] === "X" ){
      sum+= roman[s[i+1]] - roman[s[i]]
      i++
    }else{
      sum+= roman[s[i]]
    }
  }
  else if (s[i] === "X"){
    if(s[i+1] === "L" || s[i+1] === "C" ){
      sum+= roman[s[i+1]] - roman[s[i]]
      i++
    }else{
      sum+= roman[s[i]]
    }
  }
  else if (s[i] === "C"){
    if(s[i+1] === "D" || s[i+1] === "M" ){
      sum+= roman[s[i+1]] - roman[s[i]]
      i++
    }else{
      sum+= roman[s[i]]
    }
  }else{
    sum+= roman[s[i]]
  }
  i++
}

console.log(sum)


