const jsBtn = document.querySelector("#button");
const jsResult = document.querySelector("#result");

jsBtn.addEventListener("click", () => {
  const word = document.querySelector("#word").textContent;
  const input = document.querySelector("#input").value;
  const lastIndex = word.length - 1;
  const i = input[0];
  const w = word[lastIndex];
  if (w === i) {
    document.querySelector("#word").textContent = input;
    document.querySelector("#error").textContent = "";
    document.querySelector("#input").value = "";
    document.querySelector("#input").focus();
    console.log(w, i);
    console.log(word, input);
  } else {
    document.querySelector("#error").textContent = "땡";
    document.querySelector("#input").value = "";
    document.querySelector("#input").focus();
  }
});
