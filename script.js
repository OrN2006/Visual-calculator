
const buttonContainer = document.querySelector(".buttons-container");
const allOPERATORS = ["+", "-", "*", "/", "=", "clear"];
const clacDisplay = document.querySelector(".function");

let num1 = "";
let num1Operator = "";
let num2 = "";
let num2Operator = ""
let mathOperandIsClicked = false;
let operator = "";
let mathFunction = "";


function createButtons() {
    for (let i = 0; i < 10; i++) {
        createButtonAndAppend(i, "num-button");
    }

    for (op of allOPERATORS) {
        createButtonAndAppend(op, "operand-button");
    }
}


//CREATR AND APPEND a single button
function createButtonAndAppend(text, buttoClass) {
    const calcButton = document.createElement("div");
    calcButton.classList.add(buttoClass);
    calcButton.textContent = text;
    buttonContainer.appendChild(calcButton);
}

//CHECK if one of the buttons of the calculator was pressed
//IF TRUE, handle the event accordingly
buttonContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches(".operand-button, .num-button")) {
        if (target.classList.contains("num-button")) {
            handleClickOnNumber(target.textContent);
            updateMathFunction();
        }
        else {
            if (target.textContent === "=")
                handleClickOnEven(num1, num2, operator)
            else if (target.textContent === "clear") {
                handleClickOnClear();
            }
            else {
                handleClickOnMathOperand(target.textContent);
                updateMathFunction();
            }
        }
    }
})


function handleClickOnEven() {
    let result = ""
    if (num1 === "" || operator === "" || num2 === "")
        result = num1;
    else{
        result = operate(num1Operator + num1, num2Operator + num2, operator);
        result = result.toString();
    }

    clacDisplay.textContent = result;

    if (result !== "ERROR")
        num1 = result;
    else
        num1 = "";
    num2 = "";
    operator = ""
    num1Operator = "";
    num2Operator = "";
    mathOperandIsClicked = false;
    mathFunction = num1;

}

function handleClickOnNumber(digit) {
    if (!mathOperandIsClicked) {
        if (!(num1 === "0"))
            num1 += digit;
    }
    else {
        if (!(num2 === "0"))
            num2 += digit;
    }
}



function handleClickOnClear() {
    mathFunction = "";
    clacDisplay.textContent = mathFunction;
    num1 = "";
    num2 = "";
    num1Operator = "";
    num2Operator = "";
    operator = "";
    mathOperandIsClicked = false;
}

function handleClickOnMathOperand(op) {

    if (mathFunction === "" && (op === "+" || op === "-") && num1Operator === "")
        num1Operator = op;
    else if (mathFunction !== "" && num1 !== "" && !mathOperandIsClicked) {
        operator = op;
        mathOperandIsClicked = true;
    }
    else if(mathFunction !== "" && mathOperandIsClicked && num2 === "" && (op === "+" || op === "-") && num2Operator === ""){
        num2Operator = op;
    }
}

function updateMathFunction() {
    mathFunction = num1Operator + num1 + operator + num2Operator + num2;
    clacDisplay.textContent = mathFunction;
}


//CREATING all the calculator buttons
createButtons();














function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0)
        return "ERROR";
    return num1 / num2;
}

function operate(num1, num2, operateor) {
    num1 = +num1;
    num2 = +num2;
    const result =
        operateor === "+" ? add(num1, num2) :
            operateor === "-" ? subtract(num1, num2) :
                operateor === "*" ? multiply(num1, num2) :
                    operateor === "/" ? divide(num1, num2) :
                        "UNDEFINED";
    return result;
}
