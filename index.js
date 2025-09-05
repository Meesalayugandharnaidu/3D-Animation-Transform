const container = document.querySelector(".container");
const card = document.querySelector(".card");
const img = document.querySelector(".imgbox img");
const title = document.querySelector(".desc h1");
const descTxt = document.querySelector(".desc h2");

container.addEventListener("mousemove", (mc) => {
  let xAxis = (window.innerWidth / 2 - mc.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - mc.pageY) / 15;

  card.style.transform = `rotateX(${yAxis * -1}deg) rotateY(${xAxis}deg)`;
  img.style.transform = `translateZ(120px) rotateX(${yAxis}deg)`;
  title.style.transform = `translateZ(90px) rotateX(${yAxis}deg)`;
  descTxt.style.transform = `translateZ(70px) rotateX(${yAxis}deg)`;
});

// Mouse In
container.addEventListener("mouseenter", () => {
  card.style.transition = "none";
});

// Mouse Out
container.addEventListener("mouseleave", () => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
  img.style.transform = "translateZ(0px) rotateX(0deg)";
  title.style.transform = "translateZ(0px) rotateX(0deg)";
  descTxt.style.transform = "translateZ(0px) rotateX(0deg)";
});

// Processor Buttons
const proButtons = document.querySelectorAll(".processor button");
proButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeActive();
    btn.classList.add("active");
  });
});

function removeActive() {
  proButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
}
