function fiboRange(start,end){
    let arr=[];
    let a=0,b=1,temp;
    let index=0;
    while(index<=end){
        if(index>=start){
            // console.log(`At index no ${index} fibonnaci no is ${a}`)
            arr.push(a);
        }
        b=a+b;
        a=b-a;
        index++;
    }

    return arr;
}
console.log(fiboRange(4,10));
