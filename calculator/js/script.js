const keys = document.querySelectorAll(".calculator__kye");
const keysOperator = document.querySelectorAll(
  ".calculator__key--operator:not(#calculator__key--equal)",
);
const monitor = document.getElementById("monitor");
const equal = document.getElementById("calculator__key--equal");
const clear = document.querySelector(".calculator__kye--ac");

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", (event) => {
    if (isResult === true) {
      monitor.textContent = event.target.textContent;
      isResult = false;
    } else if (monitor.textContent == "0") {
      monitor.textContent = event.target.textContent;
    } else {
      monitor.textContent += event.target.textContent;
    }
  });
}

let isResult = false;
let firstNumber;
let operator;

for (let i = 0; i < keysOperator.length; i++) {
  keysOperator[i].addEventListener("click", (event) => {
    if (isResult === true) {
      firstNumber = monitor.textContent;
      operator = event.target.textContent;
      monitor.textContent = "0";
      isResult = false;
    } else if (operator !== undefined) {
      operator = event.target.textContent;
    } else {
      firstNumber = monitor.textContent;
      operator = event.target.textContent;
      monitor.textContent = "0";
    }
  });
}
function calculate(first, operator, second) {
  if (operator === "+") {
    return first + second;
  } else if (operator === "-") {
    return first - second;
  } else if (operator === "×") {
    return first * second;
  } else if (operator === "÷") {
    if (second === 0) {
      return "Error";
    } else {
      return first / second;
    }
  }
}

equal.addEventListener("click", () => {
  if (isResult === true) {
    return;
  }

  let secondNumber = Number(monitor.textContent);
  let first = Number(firstNumber);

  let result = calculate(first, operator, secondNumber);

  monitor.textContent = result;

  isResult = true;
});

clear.addEventListener("click", () => {
  monitor.textContent = "0";
  firstNumber = undefined;
  operator = undefined;
  isResult = false;
});