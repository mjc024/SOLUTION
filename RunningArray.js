var runningSum = function(nums) {
    let sums= [nums[0]]
    let total=nums[0]
    for(let i=1;i<nums.length;i++ ){
        sums[i]=nums[i]+total
         total=total+nums[i]
    }
  return sums
};

nums =[1,2,5,6,7,4]
console.log(runningSum(nums))