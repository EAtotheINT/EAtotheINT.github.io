let firstNumber = document.getElementById("firstNum");
let secondNumber = document.getElementById("SecNum");

let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");
let operator = document.getElementById("operator");

calculateBtn.addEventListener("click", calculate);

function calculate() {
  let num1 = firstNumber.value;
  let num2 = secondNumber.value;

  let answer;
  if (operator.value === "+") {
    answer = parseFloat(num1) + parseFloat(num2);
  } else if (operator.value === "-") {
    answer = parseFloat(num1) - parseFloat(num2);
  } else if (operator.value === "*") {
    answer = parseFloat(num1) * parseFloat(num2);
  } else if (operator.value === "/") {
    answer = parseFloat(num1) / parseFloat(num2);
  }

  result.innerText = answer;
}
