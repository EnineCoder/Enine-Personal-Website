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

// handling the numbers and progress bar
let textNum = document.querySelector(".info");
let spansNumbers = document.querySelectorAll(".feat [data-num]");
let progressDiv = document.querySelectorAll(".progress div");
let started = false;

let progressBar = document.querySelector(".progress");
let spansBar = document.querySelectorAll(".progress span");

// Scroll To Top
let BtnTop = document.querySelector(".move-up");

BtnTop.addEventListener("click", (e) => {
  window.scrollTo((top = 0), (beavior = "smooth"));
});

window.onscroll = function () {
  if (window.scrollY >= textNum.offsetTop - 100) {
    if (!started) {
      spansNumbers.forEach((ele) => {
        stNums(ele);
      });
      started = true;
    }
  }
  if (window.scrollY >= progressBar.offsetTop - 400) {
    spansBar.forEach((ele) => {
      ele.style.width = ele.dataset.width;
    });
  }
  if (window.scrollY >= nav.offsetTop + 200) {
    nav.classList.add("navBack");
    BtnTop.classList.add("block");
  } else {
    nav.classList.remove("navBack");
    BtnTop.classList.remove("block");
  }
};

function stNums(number) {
  let goal = number.dataset.num;
  let counter = setInterval(() => {
    number.textContent++;
    if (number.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

// Slider Section
let SliderContainer = document.querySelector(".slider-container");
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

let counter = setInterval(() => {
  let random = Math.floor(Math.random() * ArraySlider.length);

  rvActive();
  ArraySlider[random].classList.add("active");
  ArrayUl[random].classList.add("active");
}, 6000);

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

// Gallery Grid Layout
let porUls = document.querySelectorAll(".portfolio ul li");
let images = document.querySelector(".portfolio .images");
let ArrayImagesPorfolio = Array.from(images.querySelectorAll(".all"));

porUls.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    porUls.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
  });
  ele.addEventListener("click", checkPorfolio);
  ele.addEventListener("click", (e) => {});
  ele.addEventListener("click", (e) => {
    if (e.target.textContent === "All") {
      window.location.reload();
    } else {
      images.style.cssText = "display:flex;align-items:flex-end";
    }
  });
});

function checkPorfolio() {
  ArrayImagesPorfolio.forEach((img) => {
    img.style.display = "none";
    document.querySelectorAll(this.dataset.status).forEach((ele) => {
      ele.style.display = "block";
    });
  });
}
