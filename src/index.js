function showAnswer(response) {
  let joke = document.querySelector("#welcome-message");
  joke.innerHTML = response.data.answer;
}

function generateJoke() {
  theKey = "9453eocfb302f861c59f1e9f04d3bta4";
  prompt_ = "Generate a joke";
  context =
    "You are a professional comedian that specialices on short jokes, you know all the joke in the world";
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt_}&context=${context}&key=${theKey}`;
  axios.get(apiUrl).then(showAnswer);
}

let button = document.querySelector("#button");
button.addEventListener("click", generateJoke);
