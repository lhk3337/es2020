const jsBtn = document.querySelector("#button");
const jsResult = document.querySelector("#result");
const wordTag = document.querySelector("#word");
const inputTag = document.querySelector("#input");
const errorTag = document.querySelector("#error");
const dictionary = [];

jsBtn.addEventListener("click", () => {
  if (dictionary.includes(inputTag.value)) {
    errorTag.textContent = "중복입니다.";
  } else {
    if (
      inputTag.value[0] === wordTag.textContent[wordTag.textContent.length - 1]
    ) {
      //const wordIndex=word.length-1;
      //word[wordIndex];
      //변수를 하나만 사용할꺼면, 그냥 변수를 선언하지 말고 직접 대입해라.
      wordTag.textContent = inputTag.value;
      dictionary.push(inputTag.value);
      errorTag.textContent = "";
      inputTag.value = "";
      inputTag.focus();
      // console.log(w, i);
      // console.log(word, input);
      // console.log(dictionary);
    } else {
      errorTag.textContent = "땡";
      inputTag.value = "";
      inputTag.focus();
    }
  }
});
