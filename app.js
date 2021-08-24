const textInput = document.querySelector("#txt-input");
const btnTranslate = document.querySelector("#btn-translate");
const resultArea = document.querySelector("#result");

const apiURL = "https://api.funtranslations.com/translate/ferb-latin.json";
function constructURL(text) {
  return `${apiURL}?text=${text}`;
}

function errorHandler(e) {
  alert("Oops! The Server seems to be down. Please try after some time");
}

function clickHandler() {
  const inputText = textInput.value;
  fetch(constructURL(inputText))
    .then((response) => response.json())
    .then((json) => (resultArea.innerText = json.contents.translated))
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
textInput.addEventListener("click", () => (resultArea.innerHTML = ""));
