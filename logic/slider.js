"use strict";

let li1 = document.querySelector(".circles li:nth-child(1)");
let li2 = document.querySelector(".circles li:nth-child(2)");
let li3 = document.querySelector(".circles li:nth-child(3)");
let pic1 = document.querySelector(".slide:nth-child(1)");
let pic2 = document.querySelector(".slide:nth-child(2)");
let pic3 = document.querySelector(".slide:nth-child(3)");

const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  const col = document.querySelector(".colored");
  col.classList.remove("colored");

  if (current.nextElementSibling.classList.contains("slide")) {
    current.nextElementSibling.classList.add("current");
    col.nextElementSibling.classList.add("colored");
  } else {
    pic1.classList.add("current");
    li1.classList.add("colored");
  }

  setTimeout(() => current.classList.remove("current"));
};

li1.addEventListener("click", function () {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  pic1.classList.add("current");

  const col = document.querySelector(".colored");
  col.classList.remove("colored");
  li1.classList.add("colored");

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

li2.addEventListener("click", function () {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  pic2.classList.add("current");

  const col = document.querySelector(".colored");
  col.classList.remove("colored");
  li2.classList.add("colored");

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

li3.addEventListener("click", function () {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  pic3.classList.add("current");

  const col = document.querySelector(".colored");
  col.classList.remove("colored");
  li3.classList.add("colored");

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
