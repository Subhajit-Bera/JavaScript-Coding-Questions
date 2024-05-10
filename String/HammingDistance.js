var hammingDistance = function(x, y) {
    let x1=decimalToBinary(x);
    let y1=decimalToBinary(y);
    console.log(x1);
    console.log(y1);


    let count=0;
    for(let i=0;i<x1.length;i++){
        if(x1[i]===y1[i]){
            continue;
        }
        count++;
    }
    return count;
};

function decimalToBinary(decimal) {
    if (decimal === 0) {
        return '0';
    }

    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }

    return binary;
}

let ans=hammingDistance(1,4);
console.log(ans);