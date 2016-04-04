"use strict";
class Make {
  static operatorWord(operatorSign) {
    switch (operatorSign) {
      case "+":
        return "plus";
        break;

      case "-":
        return "minus";
        break;

      case "*":
        return "multiply";
        break;

      case "/":
        return "divide";
        break;

      case "=":
        return "equally";
        break;

      case "%":
        return "percent";
        break;
    }
  };

  static operatorSign(operatorWord) {
    switch (operatorWord) {
      case "plus":
        return "+";
        break;

      case "minus":
        return "-";
        break;

      case "multiply":
        return "*";
        break;

      case "divide":
        return "/";
        break;

      case "equally":
        return "=";
        break;

      case "square_root":
        return "&#8730;";
        break;
    }
  };
}