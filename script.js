
const buttonContainer = document.querySelector(".buttons-container");

function createButtons() {
    for (let i = 0; i < 10; i++) {
        createButtonAndAppend(i, "calc-button");
    }

    const OPERATORS = ["+", "-", "*", "/", "=", "clear"]

    for (op of OPERATORS) {
        createButtonAndAppend(op, "operand-button");
    }
}

function createButtonAndAppend(text, buttoClass) {
    const calcButton = document.createElement("div");
    calcButton.classList.add(buttoClass);
    calcButton.textContent = text;
    buttonContainer.appendChild(calcButton);
}

createButtons();