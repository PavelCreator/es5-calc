"use strict";
save = {
  values: function () {
    if (firstVal === undefined) {
      firstVal = parseFloat(field);
    }
    else {
      secondVal = parseFloat(field);
    }
  },
  operator: function (operatorValue) {
    operator = operatorValue;
    flagOperator = true;
  }
}

make = {
  operatorWord: function (operatorSign) {
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
  },
  operatorSign: function (operatorWord) {
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
  }
}

logger = function () {
  console.log("----------------------------------------------");
  console.log("firstVal = ");  console.log(firstVal);
  console.log("operator = ");  console.log(operator);
  console.log("secondVal = ");  console.log(secondVal);
  console.log("typeof(field) = ");console.log(typeof(field));
  console.log("typeof(firstVal) = ");console.log(typeof(firstVal));
}

logger2 = function () {
  console.log("field = ");  console.log(field);
  console.log("calculationString = ");  console.log(calculationString);
}

browser = function() {
    var ua = navigator.userAgent;
    if (ua.search(/Firefox/) != -1) return 'Firefox';
    if (ua.search(/Opera/) != -1) return 'Opera';
    if (ua.search(/Chrome/) != -1) return 'Google Chrome';
    if (ua.search(/Safari/) != -1) return 'Safari';
    if (ua.search(/Gecko/) != -1) return 'Internet Explorer';
    return 'Search Bot';
}

classFnc = {
  add: function (o, c) {
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    if (re.test(o.className)) return
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
  },
  remove: function (o, c) {
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
  }
}

