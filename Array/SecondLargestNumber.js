
// https://www.geeksforgeeks.org/problems/second-largest3735/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

class Solution{
    print2largest(arr,n){
        //code here
        let largestNum=Number.MIN_SAFE_INTEGER;
        let secLargest=-1;
        
        for(let i=0;i<arr.length;i++){
            if(arr[i]>largestNum){
                secLargest=largestNum;
                largestNum=arr[i];
            }else if(arr[i]!==largestNum && arr[i]>secLargest){
                secLargest=arr[i];
            }
        }
        
        return secLargest===Number.MIN_SAFE_INTEGER ? -1: secLargest;
    }
}