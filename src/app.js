var field, firstVal, secondVal, operator, calculationString, flagOperator, flagLastPress;

/*Functions*/
var renewField = function () {
  document.getElementById("field").value = field;
}

var resetCalculationString = function () {
  document.getElementById("calculation-string").innerHTML = "";
}

var reset = function () {
  field = 0;
  firstVal = undefined;
  secondVal = undefined;
  operator = undefined;
  calculationString = [];
  flagOperator = false;
  renewField();
  resetCalculationString();
}

var numPress = function (num) {
  if (flagLastPress === "equally") {
    reset();
  }
  flagLastPress = 'num';
  if (flagOperator) {
    field = num;
    flagOperator = false;
  } else {
    field = field * 10 + num;
  }
  renewField();
}

var saveValues = function () {
  if (firstVal === undefined) {
    firstVal = field;
  }
  else {
    secondVal = field;
  }
}

var saveOperator = function (operatorValue) {
  operator = operatorValue;
  flagOperator = true;
}

var calculationAction = function (operator) {
  if (flagLastPress === "equally") {
    switch (operator) {
      case "plus":
        field += parseFloat(calculationString[calculationString.length - 2]);
        break;

      case "minus":
        field -= parseFloat(calculationString[calculationString.length - 2]);
        break;

      case "multiply":
        field *= parseFloat(calculationString[calculationString.length - 2]);
        break;

      case "divide":
        field /= parseFloat(calculationString[calculationString.length - 2]);
        break;
    }
    renewField();
  } else {
    switch (operator) {
      case "plus":
        field = firstVal + secondVal;
        break;

      case "minus":
        field = firstVal - secondVal;
        break;

      case "multiply":
        field = firstVal * secondVal;
        break;

      case "divide":
        if (secondVal !== 0) {
          field = firstVal / secondVal;
        } else {
          reset();
          field = "Error. Division by zero";
          renewField();
          return false;
        }
        break;
    }
    renewField();
    firstVal = field;
    secondVal = 0;
  }
}

var changeCalculationString = function (operator, lastNum) {
  if (flagLastPress === "equally") {
    calculationString.splice(-1, 1);
    calculationString.push(calculationString[calculationString.length - 2]);
    calculationString.push(calculationString[calculationString.length - 2]);
    calculationString.push("=");
    string = "";
    for (var i = 0; i < calculationString.length; i++) {
      string = string + " " + calculationString[i];
    }
    string = string.substr(1);
    if (string.length > 34) {
      string = "<< " + string.substr(-34, 34);
    }
    document.getElementById("calculation-string").innerHTML = string;
  } else {
    if (!lastNum) {
      if (field >= 0){
        calculationString.push(field.toString());
      } else{
        calculationString.push("("+field.toString()+")");
      }
    }
    var sign, string = '';
    switch (operator) {
      case "plus":
        sign = "+";
        break;

      case "minus":
        sign = "-";
        break;

      case "multiply":
        sign = "*";
        break;

      case "divide":
        sign = "/";
        break;

      case "equally":
        sign = "=";
        break;
    }
    calculationString.push(sign);
    for (var i = 0; i < calculationString.length; i++) {
      string = string + " " + calculationString[i];
    }
    string = string.substr(1);
    if (string.length > 34) {
      string = "<< " + string.substr(-34, 34);
    }
    document.getElementById("calculation-string").innerHTML = string;
  }
}

var operatorPress = function (operator) {
  switch (flagLastPress) {
    case "num":
      flagLastPress = 'operator';
      saveValues();
      changeCalculationString(operator, false);
      if (secondVal !== undefined) {
        calculationAction(operator);
      }
      saveOperator(operator);
      break;

    case "operator":
      calculationString.splice(-1, 1);
      changeCalculationString(operator, true);
      saveOperator(operator);
      break;

    case "equally":
      calculationString.splice(-1, 1);
      flagLastPress = 'operator';
      saveValues();
      changeCalculationString(operator, true);
      saveOperator(operator);
      break;
  }
}
var equallyPress = function () {
  if (operator !== undefined) {
    saveValues();
    if (secondVal !== undefined) {
      changeCalculationString("equally", false);
      calculationAction(operator);
      saveOperator(operator);
      flagLastPress = "equally";
    }
  }
}
var plusMinus = function () {
  field = field - field * 2;
  renewField();
}


/*Begin*/
reset();


/*Handlers*/
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
document.getElementById("equally").onclick = function () {
  equallyPress();
}
document.getElementById("reset").onclick = function () {
  reset();
}
document.getElementById("plus-minus").onclick = function () {
  plusMinus();
}


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
