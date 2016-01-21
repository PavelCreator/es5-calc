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
  if ((flagOperator)||(field === 0)) {
    field = num;
    flagOperator = false;
    if (num === ".") {
      field = "0.";
    }
  } else {
    if (num === ".") {
      if (field.indexOf(".") != -1){
        return false;
      }
    }
    field = field.toString() + num;
  }
  renewField();
}

var saveValues = function () {
  if (firstVal === undefined) {
    firstVal = parseFloat(field);
  }
  else {
    secondVal = parseFloat(field);
  }
}

var saveOperator = function (operatorValue) {
  operator = operatorValue;
  flagOperator = true;
}

var calculationAction = function (operator) {

  if (flagLastPress === "equally") {
    secondVal = parseFloat(calculationString[calculationString.length - 2]);
    logger();
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

      case "percent":
        console.log(calculationString[calculationString.length - 1]);
        /*field = firstVal * secondVal*firstVal/100;*/
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

      case "percent":
        console.log(calculationString[calculationString.length - 1]);
        /*field = firstVal * secondVal*firstVal/100;*/
        break;
    }
    secondVal = 0;
  }
  renewField();
  firstVal = field;
/*  logger2();*/
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

var makeOperatorWord = function(operatorSign){
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

}
var logger = function(){
  console.log("----------------------------------------------");
  console.log("firstVal = ");console.log(firstVal);
  console.log("operator = ");console.log(operator);
  console.log("secondVal = ");console.log(secondVal);
}
var logger2 = function(){
  console.log("field = ");console.log(field);
  console.log("calculationString = ");console.log(calculationString);
}

var operatorPress = function (operator) {
  switch (flagLastPress) {
    case "num":
      flagLastPress = 'operator';
      saveValues();
      changeCalculationString(operator, false);
      if (secondVal !== undefined) {
        var operatorWord = makeOperatorWord(calculationString[calculationString.length - 3]);
        calculationAction(operatorWord);
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
document.getElementById("percent").onclick = function () {
  operatorPress("percent");
}

window.captureEvents(Event.KEYPRESS);
window.onkeypress = pressed;
function pressed(e) {
  switch (e.which)
  {
      case 48:
          numPress(0);
      break;

      case 49:
          numPress(1);
      break;

      case 50:
          numPress(2);
      break;

      case 51:
          numPress(3);
      break;

      case 52:
          numPress(4);
      break;

      case 53:
          numPress(5);
      break;

      case 54:
          numPress(6);
      break;

      case 55:
          numPress(7);
      break;

      case 56:
          numPress(8);
      break;

      case 57:
          numPress(9);
      break;

      case 44:
          numPress(".");
      break;

      case 44:
          numPress(".");
      break;

      case 43:
          operatorPress("plus");
      break;

      case 45:
          operatorPress("minus");
      break;

      case 42:
          operatorPress("multiply");
      break;

      case 47:
          operatorPress("divide");
      break;

      case 13:
          equallyPress();
      break;;

      case 61:
          equallyPress();
      break;

      case 0:
          reset();
      break;
  }
  /*alert(e.which);*/
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
document.getElementById("point").onclick = function () {
  numPress(".");
}
