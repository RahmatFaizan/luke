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

/* Getting the value of third option in page 1 to send in database */

const thirdoption = document.querySelector(".dot3");
const thirdoptionValue = document.querySelector(".content3 p");
const contentThree = document.querySelector("#content-three");
thirdoption.addEventListener("click", () => {
  var Value = thirdoptionValue.textContent;
  contentThree.value = Value;
});
/*     -----------------------------------        */
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

//

/* Exchange one page to another page */

const nextBtn = document.querySelector(".next-button");
const hideThisPage = document.querySelector(".page1");
const hiddenPage = document.querySelector(".page2");
const currentProvider = document.querySelector(".select-selected");
const currentProviderSendtoDb = document.querySelector("#selectit");

nextBtn.addEventListener("click", () => {
  hiddenPage.classList.add("show-page");
  hideThisPage.classList.add("hide-page");
  var providerValue = currentProvider.textContent;
  currentProviderSendtoDb.value = providerValue;
});
