"use strict";
/*Operators*/
var operatorArr = ['plus', 'minus', 'multiply', 'divide'];
for (var i = 0; i < operatorArr.length; i++) {
  document.getElementById(operatorArr[i]).onclick = (function (x) {
    return function () {
      Press.operator(operatorArr[x]);
    }
  })(i);
}

/*Special operators*/
document.getElementById("percent").onclick = function () {
  Press.percent();
}
document.getElementById("reciproc").onclick = function () {
  Press.reciproc();
}
document.getElementById("square_root").onclick = function () {
  Press.squareRoot();
}

/*Service buttons*/
document.getElementById("equally").onclick = function () {
  Press.equally();
}
document.getElementById("reset").onclick = function () {
  AppSvc.reset();
}
document.getElementById("clear_error").onclick = function () {
  Press.clearError();
}
document.getElementById("plus-minus").onclick = function () {
  Press.plusMinus();
}
document.getElementById("backspace").onclick = function () {
  Press.backspace();
}

/*Memory*/
document.getElementById("mc").onclick = function () {
  Memory.clear();
}
document.getElementById("mr").onclick = function () {
  Memory.show();
}
document.getElementById("ms").onclick = function () {
  Memory.save();
}
document.getElementById("m_plus").onclick = function () {
  Memory.plus();
}
document.getElementById("m_minus").onclick = function () {
  Memory.minus();
}

/*Clipboard*/
document.getElementById("copy").onclick = function () {
  Clipboard.copy();
}
document.getElementById("cut").onclick = function () {
  Clipboard.cut();
}

/*Additional Buttons*/
document.getElementById("show-info").onclick = function () {
  View.showInfo();
}
document.getElementById("show-keyboard").onclick = function () {
  View.showKeyboard();
}
document.getElementsByClassName("show-calc").onclick = function () {
  View.showCalc();
}
var showCalc = document.getElementsByClassName("show-calc");
for (var i = 0; i < showCalc.length; i++) {
  showCalc[i].onclick = function () {
    View.showCalc();
  }
}

/*Numbers*/
for (var i = 0; i <= 9; i++) {
  document.getElementById("n" + i).onclick = (function (x) {
    return function () {
      Press.num(x);
    }
  })(i);
}
document.getElementById("point").onclick = function () {
  Press.num(".");
}