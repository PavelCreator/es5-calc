"use strict";
AppSvc = {
  reset: function () {
    field = 0;
    firstVal = undefined;
    secondVal = undefined;
    operator = undefined;
    calculationString = [];
    flagOperator = false;
    FieldSvc.renew();
    CalculationStringSvc.reset();
  },
  calculationAction: function (operator) {
    if (flagLastPress === "equally") {
      secondVal = parseFloat(calculationString[calculationString.length - 2]);

      switch (operator) {
        case "plus":
          field = MathSvc.sum(field, parseFloat(calculationString[calculationString.length - 2]));
          break;

        case "minus":
          field = MathSvc.subtraction(field, parseFloat(calculationString[calculationString.length - 2]));
          break;

        case "multiply":
          field = MathSvc.multiplication(field, parseFloat(calculationString[calculationString.length - 2]));
          break;

        case "divide":
          field = MathSvc.division(field, parseFloat(calculationString[calculationString.length - 2]));
          break;
      }
      FieldSvc.renew();
    } else {
      switch (operator) {
        case "plus":
          field = MathSvc.sum(firstVal, secondVal);
          break;

        case "minus":
          field = MathSvc.subtraction(firstVal, secondVal);
          break;

        case "multiply":
          field = MathSvc.multiplication(firstVal, secondVal);
          break;

        case "divide":
          if (secondVal !== 0) {
            field = MathSvc.division(firstVal, secondVal);
          } else {
            AppSvc.reset();
            field = "Error. Division by zero";
            FieldSvc.renew();
            return false;
          }
          break;
      }
      secondVal = 0;
    }
    FieldSvc.renew();
    firstVal = field;
    /*  logger2();*/
  },
  changeCalculationString: function (operator, lastNum) {
    if (flagLastPress === "equally") {
      CalculationStringSvc.changeLastEqually();
    } else {
      if (!lastNum) {
        if (field >= 0) {
          calculationString.push(field.toString());
        } else {
          calculationString.push("(" + field.toString() + ")");
        }
      }
      calculationString.push(Make.operatorSign(operator));
      CalculationStringSvc.renew();
    }
  },
  specialOperatorProcess: function () {
    FieldSvc.renew();
    firstVal = parseFloat(field);
    operator = undefined;
    secondVal = undefined;
    CalculationStringSvc.renew();
    field.toString();
    flagLastPress = 'equally';
    flagOperator = true;
  }
}