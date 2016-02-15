"use strict";
/*Operators*/
var operatorArr = ['plus','minus','multiply','divide'];
for (var i = 0; i < operatorArr.length; i++) {
  document.getElementById(operatorArr[i]).onclick = (function (x) {
    return function () {
      operatorPress(operatorArr[x]);
    }
  })(i);
}

/*Special operators*/
document.getElementById("percent").onclick = function () {
  percentPress();
}
document.getElementById("reciproc").onclick = function () {
  reciprocPress();
}
document.getElementById("square_root").onclick = function () {
  squareRootPress();
}

/*Service buttons*/
document.getElementById("equally").onclick = function () {
  equallyPress();
}
document.getElementById("reset").onclick = function () {
  reset();
}
document.getElementById("clear_error").onclick = function () {
  clearErrorPress();
}
document.getElementById("plus-minus").onclick = function () {
  plusMinusPress();
}
document.getElementById("backspace").onclick = function () {
  backspacePress();
}

/*Memory*/
document.getElementById("mc").onclick = function () {
  memory.clear();
}
document.getElementById("mr").onclick = function () {
  memory.show();
}
document.getElementById("ms").onclick = function () {
  memory.save();
}
document.getElementById("m_plus").onclick = function () {
  memory.plus();
}
document.getElementById("m_minus").onclick = function () {
  memory.minus();
}

/*Clipboard*/
document.getElementById("copy").onclick = function () {
  clipboard.copy();
}
document.getElementById("cut").onclick = function () {
  clipboard.cut();
}

/*Additional Buttons*/
document.getElementById("show-info").onclick = function () {
  view.showInfo();
}
document.getElementById("show-keyboard").onclick = function () {
  view.showKeyboard();
}
document.getElementsByClassName("show-calc").onclick = function () {
  view.showCalc();
}
var showCalc = document.getElementsByClassName("show-calc");
for (var i = 0; i < showCalc.length; i++) {
  showCalc[i].onclick = function () {
    view.showCalc();
  }
}

/*Numbers*/
for (var i = 0; i <= 9; i++) {
  document.getElementById("n" + i).onclick = (function (x) {
    return function () {
      numPress(x);
    }
  })(i);
}
document.getElementById("point").onclick = function () {
  numPress(".");
}