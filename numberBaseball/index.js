const input = document.querySelector("#input");
const check = document.querySelector("#check");
const result = document.querySelector("#result");

let count = 0;
check.addEventListener("click", () => {
  const value = input.value; //문자열 ex) '3046' true truthy
  // 0, '', NaN, false, null, undefined -> false value
  if (value && value.length === 4) {
  }
});
let answer;
