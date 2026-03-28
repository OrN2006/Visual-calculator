
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0)
        return "ERROR";
    return num1 / num2;
}

//RETURN a rounded number up to two digits after the .
function round(num){
    return Math.floor(num * 100) / 100;
}

function operate(num1, num2, operateor){
    const result =
    operateor === "+" ? add(num1,num2) :
    operateor === "-" ? subtract(num1, num2) :
    operateor === "*" ? multiply(num1, num2) :
    operateor === "/" ? divide(num1, num2) :
    "UNDEFINED";
}