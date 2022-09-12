"use strict";

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// footer
let accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;

    let accordionItem = accordionItemHeader.parentElement;
    console.log(accordionItem);

    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      accordionItem.style.boxShadow = "0 2px 5px 0 rgba(0,0,0,1)";
    } else {
      accordionItemBody.style.maxHeight = 0;
      accordionItem.style.boxShadow = "0 0px 0px 0 rgba(0,0,0,0)";
    }
  });
});
