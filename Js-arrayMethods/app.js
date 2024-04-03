function Calcuate(num1,num2,callBackFunc) {
    let sum = num1+num2
    callBackFunc(sum)
}

function displaySum(params) {
    console.log("Sum is: ", params);
}
Calcuate(10,15,displaySum)