var removeDuplicates = function(nums) {
    
    //Using Inbuilt Function
    // for(let i=0;i<nums.length-1;i++){
    //     if(nums[i]===nums[i+1]){
    //         nums.splice(i+1,1);  //Here we are removing the duplicate 
    //         i--; 
    //         //After removing the duplicate we are go back to same position to check if anymore duplicates are remaing
    //     }
    // }
    // return nums.length;


    
    if(nums.length===0){
        return 0;
    }
    let i=1;

    for(let j=1;j<nums.length;j++){
        if(nums[j]!==nums[j-1]){
            nums[i]=nums[j];
            i++;
        }
    }
    return i;
};