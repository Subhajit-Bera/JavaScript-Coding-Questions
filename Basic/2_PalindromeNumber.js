

function Palindrome (number) {
    // let reverseNum = parseInt(number.toString().split("").reverse().join(""));
    let reverseNum = +number.toString().split("").reverse().join("");

    // console.log(reverseNum);

    if (number === reverseNum) {
        return true;
    } else {
        return false;
    }
}

console.log(Palindrome(121));
// console.log(Palindrome(90));