const numberInput = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiple");
const divideButton = document.querySelector("#divide");
const equalButton = document.querySelector("#equal");
const resultInput = document.querySelector("#result");

let temp; //처음 numberInput.value를 임시로 temp로 저장
let operator;

plusButton.addEventListener("click", () => inputOerator("+"));
minusButton.addEventListener("click", () => inputOerator("-"));
multiplyButton.addEventListener("click", () => inputOerator("*"));
divideButton.addEventListener("click", () => inputOerator("/"));

const inputOerator = (op) => {
  if (temp) {
    operator = `${op}`;
    numberInput.value = null;
    numberInput.focus();
  } else {
    if (numberInput.value) {
      temp = parseInt(numberInput.value);
      numberInput.value = null;
      resultInput.value = null;
      operator = `${op}`;
      numberInput.focus();
    }
  }
};

clearButton.addEventListener("click", () => {
  numberInput.value = null;
  resultInput.value = null;
  temp = null; //초기화할때 null, undefined
  operator = null;
});

equalButton.addEventListener("click", () => {
  console.log(temp, operator, numberInput.value);
  const currentNumber = parseInt(numberInput.value);
  if (operator) {
    if (numberInput.value) {
      if (operator === "+") {
        resultInput.value = temp + currentNumber;
        temp = resultInput.value;
      } else if (operator === "-") {
        resultInput.value = temp - currentNumber;
      } else if (operator === "*") {
        resultInput.value = temp * currentNumber;
      } else if (operator === "/") {
        resultInput.value = temp / currentNumber;
      }
      temp = parseInt(resultInput.value);
    }
  } else {
    if (numberInput.value) {
      resultInput.value = temp;
    }
  }
});
//paseInt( ) : 문자열로 된 부분에서 숫자만 뽑아서 변환
//Number( ) : 문자열 전체가 숫자일때 소수점까지 숫자타입으로 가져옴

// 숫자 + 숫자 = 숫자 5 + 5 = 10
// 숫자 + 문자 = 문자 5 + '5' = '55'
// 문자 + 숫자 = 문자 '5' + 5 = '55'
// 문자 + 문자 = 문자 '5' + '5' = '55'

// -, *, / 연산자는 숫자와 문자 같이 사용될 경우 연산되고 숫자로 변환.
// 숫자 -, *, / 숫자 = 숫자 5 * 5 = 25
// 숫자 -, *, / 문자 = 숫자 5 * '5' = 25
// 문자 -, *, / 숫자 = 숫자 '5' * 5 = 25
// 문자 -, *, / 문자 = 숫자 5 * '5' = 25
