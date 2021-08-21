const textInput = document.querySelector("#txt-input");
const btnTranslate = document.querySelector("#btn-translate");
const resultArea = document.querySelector("#result");

const apiURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// const apiURL = "https://api.funtranslations.com/translate/ferb-latin.json";
function constructURL(text) {
  return `${apiURL}?text=${text}`;
}

function clickHandler() {
  const inputText = textInput.value;
  fetch(constructURL(inputText))
    .then((response) => response.json())
    .then((json) => (resultArea.innerText = json.contents.translated));
}
btnTranslate.addEventListener("click", clickHandler);
