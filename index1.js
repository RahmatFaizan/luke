// Custom Select Box
const selected = document.querySelector(".selected");
const SubmitBtn = document.querySelector(".button");
const Gender = document.querySelector("#Gender");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

SubmitBtn.addEventListener("click", () => {
  var userGender = selected.textContent;
  Gender.value = userGender;
});
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    selected.style.lineHeight = "50px";
  });
});
// End

var dot1 = document.querySelector(".dot1");
var innerdot1 = document.querySelector(".inner-dot1");
var content1 = document.querySelector(".content1");
var content2 = document.querySelector(".content2");
var content3 = document.querySelector(".content3");
var dot2 = document.querySelector(".dot2");
var innerdot2 = document.querySelector(".inner-dot2");
var dot3 = document.querySelector(".dot3");
var innerdot3 = document.querySelector(".inner-dot3");
// var currentp = document.querySelector(".current-provider");
var connectiond = document.querySelector(".connection-date");
var requestedd = document.querySelector(".drop2");
var dropdown1 = document.querySelector(".dropdown1");
var dropdown2 = document.querySelector(".dropdown2");
var dropdown3 = document.querySelector(".dropdown3");
var finput = document.querySelector(".first-input");
var lhead = document.querySelector(".last-head");
var ld = document.querySelector(".last-dev");
var nd = document.querySelector(".number-dev");
var ed = document.querySelector(".email-dev");
var ninput = document.querySelector(".number-input");
var einput = document.querySelector(".email-input");
var phead = document.querySelector(".prefer-head");
var nhead = document.querySelector(".number-head");
var ehead = document.querySelector(".email-head");
var pinput = document.querySelector(".prefer-input");

// currentp.addEventListener("click", function () {
//   if (dropdown1.classList.contains("d-none")) {
//     dropdown1.classList.remove("d-none");
//     dropdown1.classList.add("d-block");
//   } else {
//     dropdown1.classList.add("d-none");
//     dropdown1.classList.remove("d-block");
//   }
//   dropdown2.classList.add("d-none");
//   dropdown2.classList.remove("d-block");
// });
//Script for Label transition / Animation
jQuery(document).ready(function () {
  $("input").on("blur", function () {
    if (!$(this).val()) $(this).removeClass("hascontent");
    else $(this).addClass("hascontent");
  });
});

/* Exchange one page to another page */

const nextBtn = document.querySelector(".next-button");
const hideThisPage = document.querySelector(".page1");
const hiddenPage = document.querySelector(".page2");

nextBtn.addEventListener("click", () => {
  hiddenPage.classList.add("show-page");
  hideThisPage.classList.add("hide-page");
});

/* Getting the value of third option in page 1 to send in database */

const thirdoption = document.querySelector(".dot3");
const thirdoptionValue = document.querySelector(".content3 p");
const contentThree = document.querySelector("#content-three");
thirdoption.addEventListener("click", () => {
  var Value = thirdoptionValue.textContent;
  contentThree.value = Value;
});
