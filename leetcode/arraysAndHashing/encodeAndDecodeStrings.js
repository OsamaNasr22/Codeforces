

const encode = (listOfStrings) => {
  let encodedStr = ''

  for (const encodedStrElement of listOfStrings) {
    encodedStr += `${encodedStrElement.length}#${encodedStrElement}`
  }

  return encodedStr

}


const decode = (str) => {
  const res = []
  let i = 0
  while (i< str.length){
    let j = i
    while (str[j] !== "#"){
      j++
    }
    let len = str.slice(i, j)
    res.push(str.slice(j+1, j+1+len))

    i = j+1+len
  }
  return res
}
console.log(decode(encode(["osama", 'nasr'])))
