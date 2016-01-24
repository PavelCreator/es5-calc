/*Operators*/
document.getElementById("plus").onclick = function () {
  operatorPress("plus");
}
document.getElementById("minus").onclick = function () {
  operatorPress("minus");
}
document.getElementById("multiply").onclick = function () {
  operatorPress("multiply");
}
document.getElementById("divide").onclick = function () {
  operatorPress("divide");
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
  info.showInfo();
}
document.getElementById("show-keyboard").onclick = function () {
  info.showKeyboard();
}
document.getElementsByClassName("show-calc").onclick = function () {
  info.showCalc();
}

/*Numbers*/
document.getElementById("n0").onclick = function () {
  numPress(0);
}
document.getElementById("n1").onclick = function () {
  numPress(1);
}
document.getElementById("n2").onclick = function () {
  numPress(2);
}
document.getElementById("n3").onclick = function () {
  numPress(3);
}
document.getElementById("n4").onclick = function () {
  numPress(4);
}
document.getElementById("n5").onclick = function () {
  numPress(5);
}
document.getElementById("n6").onclick = function () {
  numPress(6);
}
document.getElementById("n7").onclick = function () {
  numPress(7);
}
document.getElementById("n8").onclick = function () {
  numPress(8);
}
document.getElementById("n9").onclick = function () {
  numPress(9);
}
document.getElementById("point").onclick = function () {
  numPress(".");
}