const jsBtn = document.querySelector("#button");
const jsResult = document.querySelector("#result");
const wordTag = document.querySelector("#word");
const inputTag = document.querySelector("#input");
const errorTag = document.querySelector("#error");

jsBtn.addEventListener("click", () => {
  const word = wordTag.textContent;
  const input = inputTag.value;
  const lastIndex = word.length - 1;
  const i = input[0];
  const w = word[lastIndex];

  if (w === i) {
    wordTag.textContent = input;
    errorTag.textContent = "";
    inputTag.value = "";
    inputTag.focus();
    // console.log(w, i);
    // console.log(word, input);
  } else {
    errorTag.textContent = "땡";
    inputTag.value = "";
    inputTag.focus();
  }
});
