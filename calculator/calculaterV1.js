const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");
const operation = document.querySelector("#operation");
const result = document.querySelector("#result");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const timesBtn = document.querySelector("#times");
const divideBtn = document.querySelector("#divide");

const equalBtn = document.querySelector("#equal");

plusBtn.addEventListener("click", () => {
  if (plusBtn.textContent === "+") {
    operation.innerHTML = "+";
    equalBtn.addEventListener("click", () => {
      const result = parseInt(number1.value) + parseInt(number2.value);
      document.querySelector("#result").textContent = result;
    });
  }
});

minusBtn.addEventListener("click", () => {
  if (minusBtn.textContent === "-") {
    operation.innerHTML = "-";
    equalBtn.addEventListener("click", () => {
      const result = parseInt(number1.value) - parseInt(number2.value);
      document.querySelector("#result").textContent = result;
    });
  }
});

timesBtn.addEventListener("click", () => {
  if (timesBtn.textContent === "*") {
    operation.innerHTML = "*";
    equalBtn.addEventListener("click", () => {
      const result = parseInt(number1.value) * parseInt(number2.value);
      document.querySelector("#result").textContent = result;
    });
  }
});

divideBtn.addEventListener("click", () => {
  if (divideBtn.textContent === "/") {
    operation.innerHTML = "/";
    equalBtn.addEventListener("click", () => {
      const result = parseInt(number1.value) / parseInt(number2.value);
      document.querySelector("#result").textContent = result;
    });
  }
});
