

function twoSum(nums, target){
  const hashMap = new Map
  for (let i in nums){
    let diff = target - nums[i]
    if (hashMap.has(diff)){
      return [hashMap.get(diff),i ]
    }
    hashMap.set( nums[i], i)
  }
}

console.log(twoSum([3,2,4], 6))

//time: O(n)
//Mem: O(n)

//https://leetcode.com/problems/two-sum/
