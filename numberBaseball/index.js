const input = document.querySelector("#input");
const check = document.querySelector("#check");
const result = document.querySelector("#result");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer = [];
let n = 0;
while (n <= 3) {
  const index = Math.floor(Math.random() * (10 - n)); // numers.splice를 하면 배열이 하나씩 줄어든다.
  //splice때문에 배열인덱스가 하나씩 줄어들기 때문에, index도 하나씩 줄어들어 줘야 하기 때문에 n만큼 빼줌.
  //numbers=[0, 1, 2, 3], numbers[index], 이때 index=5이면 undefined
  answer.push(numbers[index]); //배열의 끝에 하나 이상의 요소를 추가, numbers[3]의 값이 answer의 마지막 인덱스에 저장
  numbers.splice(index, 1); //랜덤으로 발생한 index 값 배열부터 하나를 제거,
  //만일 numbers.splice(4, 1)이면 numbers=[0, 1, 2, 3, 5, 6 ,7 8, 9] 4번째 인덱스의 값 4 삭제 후 인덱스 5번째 있던 값이 4번째 인덱스로 이동한다.
  n = n + 1;
}
console.log(answer);

//for문
// for (let n = 0; n <= 3; n += 1) {
//   const index = Math.floor(Math.random() * (10 - n));
//   answer.push(numbers[index]);
//   numbers.splice(index, 1);
// }

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
  if (answer.join("") === value) {
    //배열 비교 [ ] === [ ] false나오기 때문에 배열을 문자열로 변환 후 비교
    result.appendChild(document.createTextNode("HR")); //div태그안 text입력
  } else {
    console.log("다르다");
    let strike = 0;
    let ball = 0;
    for (const [aIndex, aNumber] of answer.entries()) {
      for (const [iIndex, iString] of input.value.split("").entries()) {
        console.log(typeof aNumber, typeof iString);
        if (aNumber === Number(iString)) {
          if (aIndex === iIndex) {
            strike += 1;
          } else {
            ball += 1;
          }
        }
      }
    }
    result.append(
      `${input.value}: ${strike} strike ${ball} ball`,
      document.createElement("br")
    );
    if (count > 10) {
      result.appendChild(
        document.createTextNode(`Game Over : ${answer.join("")}`)
      );
    } else {
      count++;
    }
  }
});
