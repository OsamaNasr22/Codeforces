/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  const outPut = new Array(nums.length)
  let prefix = 1
  let postfix = 1

  //compute prefix

  for (let i =0, c = nums.length; i< c; i++){
    outPut[i] = prefix
    prefix = nums[i] ===0 || prefix === 0 ? 0 :   prefix * nums[i]
  }

  for (let i =nums.length-1 ; i >= 0; i--){
    outPut[i] = outPut[i] === 0 || postfix ===0? 0 : outPut[i] * postfix
    postfix = nums[i] ===0 || postfix === 0 ?  0 : postfix * nums[i]
  }

  return  outPut
};

productExceptSelf([-1,1,0,-3,3])

console.log(0 * -1)
