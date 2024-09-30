function generate_joke() {
  key = "9453eocfb302f861c59f1e9f04d3bta4";
  promt_ = "Generate a joke";
  context =
    "You are a professional comedian that specialices on short jokes, your background is dark comedy";
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt_}&context=${context}&key=${key}`;
  let welcomeText = document.querySelector("#welcome-message");
  welcomeText.classList.remove(
    "Click the button above to get a pretty bad joke!"
  );
}
// when button chick:
// welcome message desappear until page is refreshed
// a joke appears instead
// every click new bad joke appears
// click the button to generate a pretty bad dad's joke
let button = document.querySelector("#button");
button.addEventListener("click", generate_joke);
