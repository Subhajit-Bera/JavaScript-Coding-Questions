var rotate = function (nums, k) {

    n = nums.length;
    k = k % n;

    //Using Inbuilt js function
    let rotated = nums.splice(n - k, n);  //rotated is an array ->Splice return an array.
    nums.unshift(...rotated);   //Add multiple eleents at front of the array
    return nums;


    //Without using Inbuilt function
    //    reverse(nums,n-k,n-1);
    //    reverse(nums,0,n-k-1);
    //    reverse(nums,0,n-1);

};

var reverse = function (nums, i, j) {
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
}