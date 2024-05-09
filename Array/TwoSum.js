// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
    let obj={};
    let arr=[-1,-1];
    for(let i=0;i<nums.length;i++){
        if(obj[target-nums[i]]>=0){
            
            arr[0]=obj[target-nums[i]];
            arr[1]=i;
            return arr;
        }else{
            obj[nums[i]]=i;
        }
    }
}