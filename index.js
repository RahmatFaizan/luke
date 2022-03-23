"use strict";

var dot1 = document.querySelector(".dot1");
var innerdot1 = document.querySelector(".inner-dot1");
var content1 = document.querySelector(".content1");
var content2 = document.querySelector(".content2");
var content3 = document.querySelector(".content3");
var dot2 = document.querySelector(".dot2");
var innerdot2 = document.querySelector(".inner-dot2");
var dot3 = document.querySelector(".dot3");
var innerdot3 = document.querySelector(".inner-dot3");
var currentp = document.querySelector(".drop1");
var connectiond = document.querySelector(".drop3");
var requestedd = document.querySelector(".drop2");
var dropdown1 = document.querySelector(".dropdown1");
var dropdown2 = document.querySelector(".dropdown2");
var dropdown3 = document.querySelector(".dropdown3");
var options1 = document.querySelector(".selectors")
var Check1 = document.querySelector(".connection-date");
var main = document.querySelector(".grid1");

options1.style.display = ("none");
Check1.style.display = ("none");
currentp.addEventListener("click", function () {
    if (dropdown1.classList.contains("d-none")) {
        dropdown1.classList.remove("d-none");
        dropdown1.classList.add("d-block");
    } else {
        dropdown1.classList.add("d-none");
        dropdown1.classList.remove("d-block");
    }
    dropdown2.classList.add("d-none");
    dropdown3.classList.add("d-none");
    dropdown2.classList.remove("d-block");
    dropdown3.classList.remove("d-block");
});
requestedd.addEventListener("click", function () {
    if (dropdown2.classList.contains("d-none")) {
        dropdown2.classList.remove("d-none");
        dropdown2.classList.add("d-block");
    } else {
        dropdown2.classList.add("d-none");
        dropdown2.classList.remove("d-block");
    }
    dropdown1.classList.add("d-none");
    dropdown1.classList.remove("d-block");
    dropdown3.classList.add("d-none");
    dropdown3.classList.remove("d-block");
});
connectiond.addEventListener("click", function () {
    if (dropdown3.classList.contains("d-none")) {
        dropdown3.classList.remove("d-none");
        dropdown3.classList.add("d-block");
    } else {
        dropdown3.classList.add("d-none");
        dropdown3.classList.remove("d-block");
    }
    dropdown1.classList.add("d-none");
    dropdown1.classList.remove("d-block");
    dropdown2.classList.add("d-none");
    dropdown2.classList.remove("d-block");
});
dot1.addEventListener("click", function () {
    if (innerdot1.classList.contains("d-none")) {
        innerdot1.classList.remove("d-none");
        innerdot1.classList.add("d-block");
        dot1.classList.add("no-border");

        dot2.classList.remove("no-border");
        dot3.classList.remove("no-border");

        innerdot2.classList.add("d-none");
        innerdot2.classList.remove("d-block");

        innerdot3.classList.add("d-none");
        innerdot3.classList.remove("d-block");

        Check1.style.display = ("none");
        options1.style.display = ("block");
    } else {
        innerdot1.classList.add("d-none");
        innerdot1.classList.remove("d-block");
        dot1.classList.remove("no-border");
        options1.style.display = ("none");
        Check1.style.display = ("none");
    }
});
dot2.addEventListener("click", function () {
    if (innerdot2.classList.contains("d-none")) {
        innerdot2.classList.remove("d-none");
        innerdot2.classList.add("d-block");
        dot2.classList.add("no-border");
        dot1.classList.remove("no-border");
        dot3.classList.remove("no-border");

        innerdot1.classList.add("d-none");
        innerdot1.classList.remove("d-block");

        innerdot3.classList.add("d-none");
        innerdot3.classList.remove("d-block");

        options1.style.display = ("none");
        Check1.style.display = ("block");

    } else {
        innerdot2.classList.add("d-none");
        innerdot2.classList.remove("d-block");
        dot2.classList.remove("no-border");
        options1.style.display = ("none");
        Check1.style.display = ("none");
    }
});
dot3.addEventListener("click", function () {
    options1.style.display = ("none");
    Check1.style.display = ("none");
    if (innerdot3.classList.contains("d-none")) {
        innerdot3.classList.remove("d-none");
        innerdot3.classList.add("d-block");
        dot3.classList.add("no-border");
        dot2.classList.remove("no-border");
        dot1.classList.remove("no-border");

        innerdot2.classList.add("d-none");
        innerdot2.classList.remove("d-block");

        innerdot1.classList.add("d-none");
        innerdot1.classList.remove("d-block");


    } else {
        innerdot3.classList.add("d-none");
        innerdot3.classList.remove("d-block");
        dot3.classList.remove("no-border");


    }
});
// main.addEventListener("click", function () {
//   if (dropdown1.classList.contains("d-block")) {
//     dropdown1.classList.add("d-none");

//     dropdown1.classList.remove("d-block");

//   } else if (dropdown2.classList.contains("d-block")) {
//     dropdown2.classList.remove("d-block");
//     dropdown2.classList.add("d-none");
//   } else if (dropdown3.classList.contains("d-block")) {
//     dropdown3.classList.remove("d-block");
//     dropdown3.classList.add("d-none");
//   }
// })
// Calendar
// Getting Date Element
var validationMessage = document.querySelector(".validationMessage");
var validationMessage1 = document.querySelector(".validationMessage1");
var Check = document.querySelector(".requested-date");

var day = document.getElementById("day-picker-input");
var month = document.getElementById("month-picker-input");
var year = document.getElementById("year-picker-input");
var day1 = document.getElementById("day-picker-input1");
var month1 = document.getElementById("month-picker-input1");
var year1 = document.getElementById("year-picker-input1");
// Date Validation Script Start
var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1;
var currentYear = currentDate.getFullYear();
day.setAttribute("min", currentDay);
month.setAttribute("min", currentMonth);
year.setAttribute("min", currentYear);
Check.addEventListener("mouseleave", function () {
    if (day.value != "" ||
        month.value != "" ||
        year.value != "") {


        if (
            day.value < currentDay ||
            month.value < currentMonth ||
            year.value < currentYear
        ) {
            validationMessage.style.opacity = "1";
            validationMessage.style.visibility = "visible";
            validationMessage.style.transform = "translate(15px, 5px)";
            validationMessage.textContent = "Please Enter a Valid Date";
        } else { }
        if (day.value > 31) {
            day.value = currentDay;
            validationMessage.textContent = "please enter valid date";
            validationMessage.style.opacity = "1";
            validationMessage.style.visibility = "visible";
            validationMessage.style.transform = "translate(15px, 5px)";
        } else { }
        if (month.value > 12) {
            month.value = currentMonth;
            validationMessage.textContent = "please enter valid month";
            validationMessage.style.opacity = "1";
            validationMessage.style.visibility = "visible";
            validationMessage.style.transform = "translate(15px, 5px)";
        } else { }
        if (year.value > 2040) {
            year.value = currentYear;
            validationMessage.textContent = "please enter valid Year";
            validationMessage.style.opacity = "1";
            validationMessage.style.visibility = "visible";
            validationMessage.style.transform = "translate(15px, 5px)";
        } else { }
    }
    else { }
    setTimeout(function () {
        validationMessage.style.opacity = "0";
        validationMessage.style.visibility = "hidden";
        validationMessage.style.transform = "translate(0px, 0px)";
    }, 1000);
});
Check1.addEventListener("mouseleave", function () {
    if (day1.value != "" ||
        month1.value != "" ||
        year1.value != "") {


        if (
            day1.value < currentDay ||
            month1.value < currentMonth ||
            year1.value < currentYear
        ) {
            validationMessage1.style.opacity = "1";
            validationMessage1.style.visibility = "visible";
            validationMessage1.style.transform = "translate(15px, 5px)";
            validationMessage1.textContent = "Please Enter a Valid Date";
        } else { }
        if (day1.value > 31) {
            day1.value = currentDay;
            validationMessage1.textContent = "please enter valid date";
            validationMessage1.style.opacity = "1";
            validationMessage1.style.visibility = "visible";
            validationMessage1.style.transform = "translate(15px, 5px)";
        } else { }
        if (month1.value > 12) {
            month1.value = currentMonth;
            validationMessage1.textContent = "please enter valid month";
            validationMessage1.style.opacity = "1";
            validationMessage1.style.visibility = "visible";
            validationMessage1.style.transform = "translate(15px, 5px)";
        } else { }
        if (year1.value > 2040) {
            year1.value = currentYear;
            validationMessage1.textContent = "please enter valid Year";
            validationMessage1.style.opacity = "1";
            validationMessage1.style.visibility = "visible";
            validationMessage1.style.transform = "translate(15px, 5px)";
        } else { }
    }
    else { validationMessage.style.opacity = "0"; }
    setTimeout(function () {
        validationMessage1.style.opacity = "0";
        validationMessage1.style.visibility = "hidden";
        validationMessage1.style.transform = "translate(0px, 0px)";
    }, 1000);
});
// Date Validation Script Ends