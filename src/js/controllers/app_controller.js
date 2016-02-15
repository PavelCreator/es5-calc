"use strict";
numPress = function (num) {
  if (flagLastPress === "equally") {
    reset();
  }
  flagLastPress = 'num';
  if ((flagOperator) || (field === 0)) {
    field = num;
    flagOperator = false;
    if (num === ".") {
      field = "0.";
    }
  } else {
    if (num === ".") {
      if (field.toString().indexOf(".") != -1) {
        return false;
      }
    }
    field = field.toString() + num;
  }
  fieldSvc.renew();
}

operatorPress = function (operator) {
  switch (flagLastPress) {
    case "num":
      flagLastPress = 'operator';
      save.values();
      changeCalculationString(operator, false);
      if (secondVal !== undefined) {
        calculationAction(make.operatorWord(calculationString[calculationString.length - 3]));
      }
      save.operator(operator);
      break;

    case "operator":
      calculationString.splice(-1, 1);
      changeCalculationString(operator, true);
      save.operator(operator);
      break;

    case "specialOperator":
      calculationString.splice(-1, 1);
      changeCalculationString(operator, true);
      save.operator(operator);
      break;

    case "equally":
      calculationString.splice(-1, 1);
      flagLastPress = 'operator';
      save.values();
      changeCalculationString(operator, true);
      save.operator(operator);
      break;
  }
}

equallyPress = function () {
  if (operator !== undefined) {
    save.values();
    if (secondVal !== undefined) {
      changeCalculationString("equally", false);
      calculationAction(operator);
      save.operator(operator);
      flagLastPress = "equally";
    }
  }
}

plusMinusPress = function () {
  field = field - field * 2;
  fieldSvc.renew();
}

percentPress = function () {
  if ((operator !== undefined) && (flagLastPress == 'num')) {
    field = (firstVal * parseFloat(field) / 100).toString();
    fieldSvc.renew();
  }
}

reciprocPress = function () {
  if (flagLastPress !== 'operator') {
    flagLastPress = 'specialOperator';
    calculationString = ['1', '/', parseFloat(field), '='];
    field = 1/field;
    specialOperatorProcess();
  }
}
squareRootPress = function () {
  if (flagLastPress !== 'operator') {
    flagLastPress = 'specialOperator';
    calculationString = [parseFloat(field), '&#8730;', '='];
    field = Math.sqrt(field);
    specialOperatorProcess();
  }
}
backspacePress = function () {
  if (!flagOperator) {
    if ((field.toString().length <= 1)){
      field = 0;
    }else{
      field = field.toString().slice(0, -1)
    }
    fieldSvc.renew();
  }
}
clearErrorPress = function () {
  field = 0;
  fieldSvc.renew();
}