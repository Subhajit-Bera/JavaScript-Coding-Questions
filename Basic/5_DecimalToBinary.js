function binaryToDecimal(decimal) {

    if (decimal === 0) {
        return "0";
    }

    let binary = "";
    while (decimal > 0) {
        binary = decimal % 2 + binary;
        decimal = Math.floor(decimal / 2);
    }
    return parseInt(binary);


    //Using Inbuilt function: 
    //Decimal to Binary
    // let binaryString = decimal.toString(2);
    // console.log(binaryString);

    //Binary to Decimal
    // let decimalS = "0010";
    // let decimalString = parseInt(decimalS, 2);
    // console.log(decimalString)

}

console.log(binaryToDecimal(10));