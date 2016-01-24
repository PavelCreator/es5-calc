reset = function () {
  field = 0;
  firstVal = undefined;
  secondVal = undefined;
  operator = undefined;
  calculationString = [];
  flagOperator = false;
  renewField();
  resetCalculationString();
};

calculationAction = function (operator) {
/*  logger();*/
  if (flagLastPress === "equally") {
    secondVal = parseFloat(calculationString[calculationString.length - 2]);

    switch (operator) {
      case "plus":
        field = mathOperatrions.sum(field, parseFloat(calculationString[calculationString.length - 2]));
        break;

      case "minus":
        field = mathOperatrions.subtraction(field, parseFloat(calculationString[calculationString.length - 2]));
        break;

      case "multiply":
        field = mathOperatrions.multiplication(field, parseFloat(calculationString[calculationString.length - 2]));
        break;

      case "divide":
        field = mathOperatrions.division(field, parseFloat(calculationString[calculationString.length - 2]));
        break;
    }
    renewField();
  } else {
    switch (operator) {
      case "plus":
        field = mathOperatrions.sum(firstVal, secondVal);
        break;

      case "minus":
        field = mathOperatrions.subtraction(firstVal, secondVal);
        break;

      case "multiply":
        field = mathOperatrions.multiplication(firstVal, secondVal);
        break;

      case "divide":
        if (secondVal !== 0) {
          field = mathOperatrions.division(firstVal, secondVal);
        } else {
          reset();
          field = "Error. Division by zero";
          renewField();
          return false;
        }
        break;
    }
    secondVal = 0;
  }
  renewField();
  firstVal = field;
/*  logger2();*/
};



changeCalculationString = function (operator, lastNum) {
  if (flagLastPress === "equally") {
    calculationString.splice(-1, 1);
    calculationString.push(calculationString[calculationString.length - 2]);
    calculationString.push(calculationString[calculationString.length - 2]);
    calculationString.push("=");
    renewCalculationString();
  } else {
    if (!lastNum) {
      if (field >= 0) {
        calculationString.push(field.toString());
      } else {
        calculationString.push("(" + field.toString() + ")");
      }
    }
    var sign, string = '';
    sign = make.operatorSign(operator);
    calculationString.push(sign);
    renewCalculationString();
  }
};

specialOperatorProcess = function () {
  renewField();
  firstVal = parseFloat(field);
  operator = undefined;
  secondVal = undefined;
  renewCalculationString();
  field.toString();
  flagLastPress = 'equally';
  flagOperator = true;
}