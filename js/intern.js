let bars = document.querySelector("nav .fa-bars");
let navUls = document.querySelector("nav ul");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

bars.addEventListener("click", (e) => {
  navUls.classList.add("open");
  bars.classList.add("vanish");
});
close.addEventListener("click", (e) => {
  navUls.classList.remove("open");
  bars.classList.remove("vanish");
});

// handling the dropdown
let dropdownDiv = document.querySelector(".dropdown");
let showDropDiv = document.querySelector(".show-drop");
let lastLi = document.querySelector(".last-li");

dropdownDiv.addEventListener("click", (e) => {
  showDropDiv.classList.toggle("block");
  if (nav.offsetWidth < 900) {
    lastLi.classList.toggle("push-down");
  }
});

let SliderContainer = document.querySelector(".prot-con");
let ArraySlider = Array.from(SliderContainer.querySelectorAll(".box"));
let indicator = document.querySelector(".indicator");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let sliderLength = ArraySlider.length;
let currentSlider = 1;

prev.onclick = prevBtn;
next.onclick = nextBtn;

let paginationList = document.createElement("ul");

for (i = 1; i <= sliderLength; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationList.appendChild(paginationItem);
}
indicator.appendChild(paginationList);
let ArrayUl = Array.from(indicator.querySelectorAll("ul li"));

checker();

function prevBtn() {
  if (this.classList.contains("disabled")) {
    return;
  } else {
    currentSlider--;
    checker();
  }
}
function nextBtn() {
  if (this.classList.contains("disabled")) {
    return;
  } else {
    currentSlider++;
    checker();
  }
}

function checker() {
  rvActive();
  ArraySlider[currentSlider - 1].classList.add("active");
  ArrayUl[currentSlider - 1].classList.add("active");

  if (currentSlider >= sliderLength) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
  if (currentSlider == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
}

function rvActive() {
  ArraySlider.forEach((ele) => {
    ele.classList.remove("active");
  });
  ArrayUl.forEach((ele) => {
    ele.classList.remove("active");
  });
}

ArrayUl.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    currentSlider = e.target.dataset.index;
    checker();
  });
});
