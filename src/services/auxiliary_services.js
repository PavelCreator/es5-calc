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

logger = function () {
  console.log("----------------------------------------------");
  console.log("firstVal = ");
  console.log(firstVal);
  console.log("operator = ");
  console.log(operator);
  console.log("secondVal = ");
  console.log(secondVal);
}

logger2 = function () {
  console.log("field = ");
  console.log(field);
  console.log("calculationString = ");
  console.log(calculationString);
}