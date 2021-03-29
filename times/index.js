const jsResult = document.querySelector("#result");
const jsBtn = document.querySelector("#click");

const times = () => {
  const jsFirst = document.querySelector("#first").value;
  const jsSecond = document.querySelector("#second").value;
  //index.html에 input에 value값이 없어서 맨위에 선언하게 되면 값이 없다고 나온다.
  //만일 index.html의 input 태그에 <input type="number" id="first" value="3" />을 입력하고
  //jsFisrt를 맨 위로 올리면 jsFirst의 value는 3이 나온다.
  //버튼을 누르면 input이 입력되어 곱셈을 하도록 코딩했기때문에 곱셈 함수안에 두개의 변수를 넣었음
  if (jsFirst) {
    if (jsSecond) {
      jsResult.textContent = jsFirst * jsSecond;
    } else {
      jsResult.textContent = "두번째 값을 입력하세요";
    }
  } else {
    jsResult.textContent = "첫번째 값을 입력하세요";
  }
};

jsBtn.addEventListener("click", times);
// .은 ~의(소유)를 의미합니다
//()은 동작 실행을 의미합니다.
// input 값이면 value이고 span일때는 textContent 이다.
