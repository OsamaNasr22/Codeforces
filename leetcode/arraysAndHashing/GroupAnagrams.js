
const groupAnagrams = function (strs) {

  const hashMap = {}

  for (let str of strs) {
    let strSort = str.split("").sort().join('')
    if (!hashMap[strSort]) hashMap[strSort] = [str]
    else {

      const oldArray = hashMap[strSort]
      oldArray.push(str)
      hashMap[strSort] = oldArray
    }
  }
  return Object.values(hashMap)

};
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

const groupAnagramsV2 = function (strs) {

  const hasMap = {}

  for (let str of strs){
    const count = new Array(26).fill(1)
    const strArr = str.split('')
    for (let s of strArr){
      let index = s.charCodeAt(0) - "a".charCodeAt(0)
      count[index] = count[index] +1
    }
    let key = count.join('')
    hasMap[key] = hasMap[key]? [str, ...hasMap[key]] : [str]
  }

  return Object.values(hasMap)
};

