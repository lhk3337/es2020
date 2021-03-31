const input = document.querySelector("#input");
const check = document.querySelector("#check");
const result = document.querySelector("#result");

let answer = [];
let n = 0;
while (n <= 3) {
  answer[n] = Math.floor(Math.random() * 10);
  n++;
}

// let answer = [
//   String(Math.floor(Math.random()) * 10),
//   String(Math.floor(Math.random()) * 10),
//   String(Math.floor(Math.random()) * 10),
//   String(Math.floor(Math.random()) * 10),
// ];
// console.log(Number(answer.join("")));

// const first = String(Math.floor(Math.random()) * 10); //3  숫자 첫번쨰
// const second = String(Math.floor(Math.random()) * 10); //0 숫자 두번째
// const third = String(Math.floor(Math.random()) * 10); //4  숫자 세번째
// const fourth = String(Math.floor(Math.random()) * 10); //6 숫자 네번쨰

// first + second + third + fourth; //=> 3 + 0 + 4 + 6 = 13
// "3046" => String(first) + String(second) + String(third) + String(fourth)

let count = 0;
check.addEventListener("click", () => {
  const value = input.value; //문자열 ex) '3046' true truthy
  // 0, '', NaN, false, null, undefined -> false value
  if (value && value.length === 4) {
  }
});
