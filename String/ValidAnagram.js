// https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {

    //APPROACH 1: 
    // s=s.split("").sort().join("");
    // t=t.split("").sort().join("");
    // return s===t;


    //APPROACH 2: Using frequency array
    // if(s.length!==t.length) return false;
    // let arr=new Array(26).fill(0);

    // for(let i=0;i<s.length;i++){
    //     arr[s[i].charCodeAt(0)-97]++;
    //     arr[t[i].charCodeAt(0)-97]--;
    // }

    // for(let a of arr){
    //     if(a!==0){
    //         return false;
    //     }
    // }
    // return true;


    //APPROACH 3 : Using JS Objects
    if(s.length!==t.length) return false;
    let obj1={};
    let obj2={};

    for(let i=0;i<s.length;i++){
        obj1[s[i]]=(obj1[s[i]]||0)+1;
        obj2[t[i]]=(obj2[t[i]]||0)+1;
    }

    for(i in obj1){
        if(obj1[i]!== obj2[i]){
            return false;
        }
    }

    return true;
};