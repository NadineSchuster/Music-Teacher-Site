"use strict";

// language element
let langButton = document.querySelector("nav button");
let langOptions = document.querySelector("#language");
let langOptionEng = document.querySelector(".lang-eng");
let langOptionGer = document.querySelector(".lang-ger");
let langOptionFr = document.querySelector(".lang-fr");
let langOptionGr = document.querySelector(".lang-greek");
// let langAllOpts = document.querySelectorAll("#language li");

// texts and titles
let textFirstSection = document.querySelector(".music_lesson_Text");
let textSecondSection = document.querySelector(".vita-text");
let musicLessonsTitel = document.querySelector("#music h2");
let aboutTitel = document.querySelector("#über h2");
let phoneTitel = document.querySelector(".phone");
let emailTitel = document.querySelector(".email");

// nav elements
let navHome = document.querySelector("#nav-home");
let navMusic = document.querySelector("#nav-music");
let navAbout = document.querySelector("#nav-about");
let navContact = document.querySelector("#nav-contact");
let flag = document.querySelector("#flag");

let request = new XMLHttpRequest();
let xml;

// get xml-data with translations
request.onload = () => {
  if (request.status == 200) {
    xml = request.responseXML;
    // console.log(xml);
  } else {
    console.log("Problem with server");
  }
};

// set english language
langOptionEng.addEventListener("click", function () {
  let englishXml = xml.querySelector("english");

  navHome.textContent = englishXml.querySelector("home").textContent;
  navMusic.textContent = englishXml.querySelector("music").textContent;
  navAbout.textContent = englishXml.querySelector("about").textContent;
  navContact.textContent = englishXml.querySelector("contact").textContent;

  textFirstSection.textContent =
    englishXml.querySelector("musicLessonsText").textContent;
  textSecondSection.textContent = englishXml.querySelector("vita").textContent;
  musicLessonsTitel.textContent =
    englishXml.querySelector("musicLessonsTitel").textContent;
  aboutTitel.textContent = englishXml.querySelector("aboutTitle").textContent;
  phoneTitel.textContent = englishXml.querySelector("phoneTitel").textContent;
  emailTitel.textContent = englishXml.querySelector("emailTitel").textContent;

  flag.src = "./imgs/icons/english_flag.png";
  langOptions.style.display = "none";
});

// set german language
langOptionGer.addEventListener("click", function () {
  let germanXml = xml.querySelector("german");

  navHome.textContent = germanXml.querySelector("home").textContent;
  navMusic.textContent = germanXml.querySelector("music").textContent;
  navAbout.textContent = germanXml.querySelector("about").textContent;
  navContact.textContent = germanXml.querySelector("contact").textContent;

  textFirstSection.textContent =
    germanXml.querySelector("musicLessonsText").textContent;
  textSecondSection.textContent = germanXml.querySelector("vita").textContent;
  musicLessonsTitel.textContent =
    germanXml.querySelector("musicLessonsTitel").textContent;
  aboutTitel.textContent = germanXml.querySelector("aboutTitle").textContent;
  phoneTitel.textContent = germanXml.querySelector("phoneTitel").textContent;
  emailTitel.textContent = germanXml.querySelector("emailTitel").textContent;

  flag.src = "./imgs/icons/german_flag.png";
  langOptions.style.display = "none";
});

// set french language
langOptionFr.addEventListener("click", function () {
  let frenchXml = xml.querySelector("french");

  navHome.textContent = frenchXml.querySelector("home").textContent;
  navMusic.textContent = frenchXml.querySelector("music").textContent;
  navAbout.textContent = frenchXml.querySelector("about").textContent;
  navContact.textContent = frenchXml.querySelector("contact").textContent;

  textFirstSection.textContent =
    frenchXml.querySelector("musicLessonsText").textContent;
  textSecondSection.textContent = frenchXml.querySelector("vita").textContent;
  musicLessonsTitel.textContent =
    frenchXml.querySelector("musicLessonsTitel").textContent;
  aboutTitel.textContent = frenchXml.querySelector("aboutTitle").textContent;
  phoneTitel.textContent = frenchXml.querySelector("phoneTitel").textContent;
  emailTitel.textContent = frenchXml.querySelector("emailTitel").textContent;

  flag.src = "./imgs/icons/french_flag.png";
  langOptions.style.display = "none";
});

// set greek language
langOptionGr.addEventListener("click", function () {
  let greekXml = xml.querySelector("greek");

  navHome.textContent = greekXml.querySelector("home").textContent;
  navMusic.textContent = greekXml.querySelector("music").textContent;
  navAbout.textContent = greekXml.querySelector("about").textContent;
  navContact.textContent = greekXml.querySelector("contact").textContent;

  textFirstSection.textContent =
    greekXml.querySelector("musicLessonsText").textContent;
  textSecondSection.textContent = greekXml.querySelector("vita").textContent;
  musicLessonsTitel.textContent =
    greekXml.querySelector("musicLessonsTitel").textContent;
  aboutTitel.textContent = greekXml.querySelector("aboutTitle").textContent;
  phoneTitel.textContent = greekXml.querySelector("phoneTitel").textContent;
  emailTitel.textContent = greekXml.querySelector("emailTitel").textContent;

  flag.src = "./imgs/icons/greek_flag.png";
  langOptions.style.display = "none";
});

// show and hide language options
function showLanguageOptions() {
  langButton.addEventListener(
    "mouseenter",
    (e) => (langOptions.style.display = "flex")
  );

  langButton.addEventListener("click", function () {
    if (langOptions.style.display === "none") {
      langOptions.style.display = "flex";
    } else {
      langOptions.style.display = "none";
    }
  });

  langOptions.addEventListener(
    "mouseleave",
    (e) => (langOptions.style.display = "none")
  );

  langButton.addEventListener("onblur", function () {
    console.log("onblur");
  });
}

showLanguageOptions();

request.open("GET", "./lang/lang.xml");
request.responseType = "document";
request.setRequestHeader("Accept", "text/xml");
request.send();
