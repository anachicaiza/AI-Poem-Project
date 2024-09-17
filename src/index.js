function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 80,
  });
}
function generatePoem(event) {
  event.preventDefault();
  let topicElement = document.querySelector("#topic");
  let apiKey = "b739b64actfb7710ab2aa8f6044o4c38";
  let context =
    "You are an expert writer and love to write poems. Your goal is to write a 4 line poem and display it in basic HTML structure, but without the html and body tags and separate each line with a </br>. Be sure of generate a different poem every time. Do not add a title";
  let prompt = `Generate a poem about ${topicElement.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayPoem);
}
let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
