const nxtbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
let dogImages = document.querySelectorAll("img");
const progressLine = document.getElementById("progress-line");
const openbtn = document.getElementById("open");
const closebtn = document.getElementById("close");
let square = document.querySelector(".square");
let navUnorderedList = document.querySelector(".nav-ul");
let counter = 1;
let variable = 0;

nxtbtn.addEventListener("click", () => {
  counter++;
  if (variable < 2) {
    variable++;
  }
  if (counter > circles.length) {
    counter = circles.length;
  }
  highlightCircle();
});

prevbtn.addEventListener("click", () => {
  counter--;
  if (variable >= 1) {
    variable--;
  }
  if (counter < 1) {
    counter = 1;
  }
  highlightCircle();
});

function highlightCircle() {
  circles.forEach((circle, index) => {
    if (index < counter) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  dogImages.forEach((image, idx) => {
    dogImages[counter - 1].classList.add("active");
    if (idx < counter - 1) {
      image.className = "";
    } else if(idx > counter - 1){
      dogImages[idx].className = "";
    }
  });
  progressLine.style.width = 50 * variable + "%";
}

openbtn.addEventListener("click", () => {
  square.style.transform = "rotate(-90deg)";
  navUnorderedList.style.left = 0;
});

closebtn.addEventListener("click", () => {
  square.style.transform = "rotate(0deg)";
  navUnorderedList.style.left = -50 + "%";
});
