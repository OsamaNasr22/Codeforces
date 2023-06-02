/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const hasMap = {}
  const count = new Array(nums.length + 1).fill([])
  let result = []
  for (const n of nums)
    hasMap[n] = hasMap[n]? hasMap[n] + 1 : 1

  const keys = Object.keys(hasMap)
  for (const key of keys) count[hasMap[key]] = [key, ...count[hasMap[key]]]

  for (let i = count.length -1 ; i > 0 ; i--){
    const arr = count[i]
    if (arr.length > 0){
      if (result.length === k) break
      result.push(...arr.slice(0,k))
    }
  }
  return  result
};
console.log(topKFrequent([1],1))
