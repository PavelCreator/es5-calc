"use strict";
class View {
  static showInfo() {
    document.getElementById("calc").style.display = "none";
    document.getElementById("info").style.display = "block";
  };

  static showKeyboard() {
    document.getElementById("calc").style.display = "none";
    document.getElementById("keyboard").style.display = "block";
  };

  static showCalc() {
    document.getElementById("info").style.display = "none";
    document.getElementById("keyboard").style.display = "none";
    document.getElementById("calc").style.display = "block";
  };
}