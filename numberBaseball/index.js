const input = document.querySelector("#input");
const check = document.querySelector("#check");
const result = document.querySelector("#result");

let answer;

const first = Math.floor(Math.random()) * 10;
const second = Math.floor(Math.random()) * 10;
const third = Math.floor(Math.random()) * 10;
const fourth = Math.floor(Math.random()) * 10;

let count = 0;
check.addEventListener("click", () => {
  const value = input.value; //문자열 ex) '3046' true truthy
  // 0, '', NaN, false, null, undefined -> false value
  if (value && value.length === 4) {
  }
});
