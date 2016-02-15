"use strict";
calculationStringSvc = {
  reset: function(){
    document.getElementById("calculation-string").innerHTML = "";
  },
  renew: function(){
    var string = "";
    for (var i = 0; i < calculationString.length; i++) {
      string = string + " " + calculationString[i];
    }
    string = string.substr(1);
    if (string.length > 34) {
      string = "<< " + string.substr(-34, 34);
    }
    document.getElementById("calculation-string").innerHTML = string;
  },
  changeLastEqually: function(){
    calculationString.splice(-1, 1);
    calculationString.push(calculationString[calculationString.length - 2]);
    calculationString.push(calculationString[calculationString.length - 2]);
    calculationString.push("=");
    this.renew();
  }
}