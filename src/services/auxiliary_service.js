renewField = function () {
  document.getElementById("field").value = field;
}

resetCalculationString = function () {
  document.getElementById("calculation-string").innerHTML = "";
}

saveValues = function () {
  if (firstVal === undefined) {
    firstVal = parseFloat(field);
  }
  else {
    secondVal = parseFloat(field);
  }
}

saveOperator = function (operatorValue) {
  operator = operatorValue;
  flagOperator = true;
}

makeOperatorWord = function (operatorSign) {
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

makeOperatorSign = function (operatorWord){
  switch (operator) {
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
  }
}

renewCalculationString = function () {
  var string = "";
  for (var i = 0; i < calculationString.length; i++) {
    string = string + " " + calculationString[i];
  }
  string = string.substr(1);
  if (string.length > 34) {
    string = "<< " + string.substr(-34, 34);
  }
  document.getElementById("calculation-string").innerHTML = string;
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
