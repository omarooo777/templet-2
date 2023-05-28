let toggleMenu = document.querySelector(".toggle-menu");
let headerUl = document.querySelector(".drop-down");

toggleMenu.onclick = function () {
  headerUl.classList.toggle("closed");
};

let searchIcon = document.querySelector(".ser-icon");
let form = document.querySelector(".show");
let input = document.querySelector(".show .search-input");

searchIcon.onclick = function () {
  form.style.transition = "opacity 1s ease";
  form.classList.toggle("hidden");
  input.focus();
};
form.onmouseenter = function () {
  if (form.classList.contains("hidden")) {
    searchIcon.title = "show search input";
  } else {
    searchIcon.title = "hide search input";
  }
};

let allLis = document.querySelectorAll(".bullets li");
let toRight = document.querySelector(".right");
let toLeft = document.querySelector(".left");
let landing = document.querySelector(".landing");

let slides = document.querySelectorAll(".landing-img");

let slideIndex = 2;
showIndex(slideIndex);

function plusSlide(n) {
  showIndex((slideIndex += n));
}

function currentSlide(n) {
  showIndex((slideIndex = n));
}

function showIndex(el) {
  if (el > slides.length) {
    slideIndex = 1;
  } else if (el < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(function (el) {
    el.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "block";

  allLis.forEach(function (el, i) {
    el.onclick = function () {
      currentSlide(i + 1);
    };
    el.classList.remove("active")
    allLis[slideIndex-1].classList.add("active");
  });
}

toLeft.onclick = function () {
  plusSlide(-1);
};

toRight.onclick = function () {
  plusSlide(1);
};


function removeClasses(e) {
  e.forEach(function (el) {
    el.classList.remove("active");
  });
}

let shuffleLis = document.querySelectorAll(".shuffle li");
shuffleLis.forEach(function (el) {
  el.onclick = function () {
    removeClasses(shuffleLis);
    this.classList.add("active");
  };
});

let allLinks = document.querySelector(".all");
let appLink = document.querySelector(".app");
let photoLink = document.querySelector(".photo");
let webLink = document.querySelector(".web");
let printLink = document.querySelector(".print");

let boxs = document.querySelectorAll(".imgs-box .box");
let imgs = document.querySelectorAll(".imgs-box .box img");

allLinks.addEventListener("click", function () {
  boxs.forEach(function (el) {
    el.style.width = "305px";
    el.style.height = "228.25px";
  });
});

appLink.addEventListener("click", function () {
  testing(appLink);
});
photoLink.addEventListener("click", function () {
  testing(photoLink);
});
webLink.addEventListener("click", function () {
  testing(webLink);
});
printLink.addEventListener("click", function () {
  testing(printLink);
});

function testing(currentLi) {
  boxs.forEach(function (el) {
    el.style.width = "0";
    el.style.height = "0";
    if (el.dataset.list == currentLi.classList[0]) {
      el.style.width = "305px";
      el.style.height = "228.25px";
    }
  });
}

let services = document.querySelector(".services");
let header = document.querySelector(".header");
let aboutSection = document.querySelector(".about");
let statsNumber = document.querySelectorAll(".stats .box .number");
let allSpans = document.querySelectorAll(
  ".our-skills .container .skills .prog-holder .prog span"
);
let quote = document.querySelector(".quote q");
let quoteSpan = document.querySelector(".quote span");
let start = false;

window.onscroll = function () {
  if (window.scrollY >= services.offsetTop - 80) {
    header.style.background = "rgb(15 116 143)";
  }
  if (window.scrollY <= services.offsetTop - 50) {
    header.style.background = "transparent";
  }
  if (window.scrollY >= aboutSection.offsetTop + 200) {
    if (!start) {
      statsNumber.forEach((num) => startCount(num));
      start = true;
    }
  }
  if (window.scrollY >= aboutSection.offsetTop + 1100) {
    allSpans.forEach((span) => {
      span.style.width = `${span.dataset.goal}%`;
    });
  }
  if (window.scrollY >= aboutSection.offsetTop + 1400) {
    quote.style.fontSize = `25px`;
    quoteSpan.style.fontSize = "14px";
  }
};

function startCount(el) {
  let number = el.dataset.number;
  let count = setInterval(function () {
    el.textContent++;
    if (el.innerHTML == number) {
      clearInterval(count);
    }
  }, 2000 / number);
}

let dateNow = new Date();
let copyRight = document.querySelector(".copy-right");

copyRight.innerHTML = `&copy; ${dateNow.getFullYear()} <span>Kasper</span> All Right Reserved`;
