/*
steps:
   1- user can click on any number
   2- create the calculator class that allows the following:
      1- any clicked number will be shown onto the screen
      2- choose an operation
      3- compute the results
      4- user can delete the value of the last clicked button
      5- user can reset the screen
   3- user can change the theme
*/
"use strict";
import Calculator from "./operations.js";
const btns = document.querySelectorAll(".btn");
const currentValue = document.querySelector(".currentValue");
const operators = ["+", "-", "x", "/"];

// *numbers clicked, then append their values on the screen
const calculator = new Calculator(currentValue);
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (btn.classList.contains("no")) {
      calculator.appendNumbers(btn.textContent);
    } else if (btn.classList.contains("opr")) {
      calculator.chooseOperation(btn.textContent, operators);
    } else if (btn.classList.contains("reset")) {
      calculator.ResetValues();
    } else if (btn.classList.contains("delBtn")) {
      calculator.delValue();
    } else if (btn.classList.contains("equals")) {
      calculator.computeResults();
    }
  });
});

// *change theme
const radioInputs = document.querySelectorAll('input[type="radio"]');

radioInputs.forEach((input) => {
  input.addEventListener("click", function (e) {
    radioInputs.forEach((radio) => {
      radio.classList.remove("active");
    });
    this.classList.add("active");

    if (this.id == "frTheme") {
      document.querySelector(":root").style.cssText = `
      --mainBg: hsl(222, 26%, 31%);
      --resultsBg: hsl(224, 36%, 15%);
      --txtClr: hsl(0, 0%, 100%);
      --calcBg: hsl(223, 31%, 20%);
      --btnsBg: hsl(30, 25%, 89%);
      --btnsClr: hsl(221, 14%, 31%);
      --keyClr: hsl(225, 21%, 49%);
      --equalsBg: hsl(6, 63%, 50%);
      --keyShadow: hsl(28, 16%, 65%);
      --resetShadow: hsl(224, 28%, 35%);
      --eqhadow: hsl(6, 70%, 34%);
      `;
    } else if (this.id == "snTheme") {
      document.querySelector(":root").style.cssText = `
      --mainBg: hsl(0, 0%, 90%);
      --resultsBg:hsl(0, 0%, 93%);
      --txtClr:  hsl(60, 10%, 19%);
      --calcBg: hsl(0, 5%, 81%);
      --btnsBg: hsl(185, 42%, 37%);
      --btnsClr: hsl(60, 10%, 19%);
      --keyClr: hsl(45, 7%, 89%);
      --equalsBg: hsl(25, 98%, 40%);
      --keyShadow: hsl(185, 58%, 25%);
      --resetShadow: hsl(35, 11%, 61%);
      --eqhadow: hsl(25, 99%, 27%);
      `;
    } else if (this.id == "thrTheme") {
      document.querySelector(":root").style.cssText = `
      --mainBg: hsl(268, 75%, 9%);
      --resultsBg:hsl(268, 71%, 12%);
      --txtClr:   hsl(0, 0%, 100%);
      --calcBg: hsl(268, 71%, 12%);
      --btnsBg: hsl(281, 89%, 26%);
      --btnsClr:hsl(0, 0%, 100%);
      --keyClr: hsl(268, 47%, 21%);
      --equalsBg: hsl(176, 100%, 44%);
      --keyShadow:hsl(285, 91%, 52%);
      --resetShadow: hsl(290, 70%, 36%);
      --eqhadow: hsl(177, 92%, 70%);
      `;
    }
  });
});
