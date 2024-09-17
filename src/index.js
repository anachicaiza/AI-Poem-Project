function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "she radiates kindness and sympathy.",
    autoStart: true,
    delay: 80,
  });
}
let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
