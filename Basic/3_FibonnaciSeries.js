
function fibo(n){
    if(n==0 || n==1) return n;

    return fibo(n-1)+fibo(n-2);
}


function fiboIte(n){
    if(n==0 || n==1 ) return n;

    let a=0;
    let b=1;
    
    for(let i=2;i<=n;i++){
        b=b+a;
        a=b-a;
    }

    return b;
}

let ans=fibo(6);
let ans1=fiboIte(6);
console.log(ans);
console.log(ans1);



