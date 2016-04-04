"use strict";
class CalculationStringSvc {
  static reset() {
    document.getElementById("calculation-string").innerHTML = "";
  };

  static renew() {
    var string = "";
    for (var i = 0; i < calculationString.length; i++) {
      string = string + " " + calculationString[i];
    }
    string = string.substr(1);
    if (string.length > 34) {
      string = "<< " + string.substr(-34, 34);
    }
    document.getElementById("calculation-string").innerHTML = string;
  };

  static changeLastEqually() {
    calculationString.splice(-1, 1);
    calculationString.push(calculationString[calculationString.length - 2]);
    calculationString.push(calculationString[calculationString.length - 2]);
    calculationString.push("=");
    this.renew();
  };
}