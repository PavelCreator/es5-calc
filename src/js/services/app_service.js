"use strict";
reset = function () {
  field = 0;
  firstVal = undefined;
  secondVal = undefined;
  operator = undefined;
  calculationString = [];
  flagOperator = false;
  fieldSvc.renew();
  calculationStringSvc.reset();
};

calculationAction = function (operator) {
/*  logger();*/
  if (flagLastPress === "equally") {
    secondVal = parseFloat(calculationString[calculationString.length - 2]);

    switch (operator) {
      case "plus":
        field = mathSvc.sum(field, parseFloat(calculationString[calculationString.length - 2]));
        break;

      case "minus":
        field = mathSvc.subtraction(field, parseFloat(calculationString[calculationString.length - 2]));
        break;

      case "multiply":
        field = mathSvc.multiplication(field, parseFloat(calculationString[calculationString.length - 2]));
        break;

      case "divide":
        field = mathSvc.division(field, parseFloat(calculationString[calculationString.length - 2]));
        break;
    }
    fieldSvc.renew();
  } else {
    switch (operator) {
      case "plus":
        field = mathSvc.sum(firstVal, secondVal);
        break;

      case "minus":
        field = mathSvc.subtraction(firstVal, secondVal);
        break;

      case "multiply":
        field = mathSvc.multiplication(firstVal, secondVal);
        break;

      case "divide":
        if (secondVal !== 0) {
          field = mathSvc.division(firstVal, secondVal);
        } else {
          reset();
          field = "Error. Division by zero";
          fieldSvc.renew();
          return false;
        }
        break;
    }
    secondVal = 0;
  }
  fieldSvc.renew();
  firstVal = field;
/*  logger2();*/
};
changeCalculationString = function (operator, lastNum) {
  if (flagLastPress === "equally") {
    calculationStringSvc.changeLastEqually();
  } else {
    if (!lastNum) {
      if (field >= 0) {
        calculationString.push(field.toString());
      } else {
        calculationString.push("(" + field.toString() + ")");
      }
    }
    calculationString.push(make.operatorSign(operator));
    calculationStringSvc.renew();
  }
};

specialOperatorProcess = function () {
  fieldSvc.renew();
  firstVal = parseFloat(field);
  operator = undefined;
  secondVal = undefined;
  calculationStringSvc.renew();
  field.toString();
  flagLastPress = 'equally';
  flagOperator = true;
}