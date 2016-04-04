"use strict";
Press = {
  num: function (num) {
    if (flagLastPress === "equally") {
      AppSvc.reset();
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
    FieldSvc.renew();
  },
  operator: function (operator) {
    switch (flagLastPress) {
      case "num":
        flagLastPress = 'operator';
        Save.values();
        AppSvc.changeCalculationString(operator, false);
        if (secondVal !== undefined) {
          AppSvc.calculationAction(Make.operatorWord(calculationString[calculationString.length - 3]));
        }
        Save.operator(operator);
        break;

      case "operator":
        calculationString.splice(-1, 1);
        AppSvc.changeCalculationString(operator, true);
        Save.operator(operator);
        break;

      case "specialOperator":
        calculationString.splice(-1, 1);
        AppSvc.changeCalculationString(operator, true);
        Save.operator(operator);
        break;

      case "equally":
        calculationString.splice(-1, 1);
        flagLastPress = 'operator';
        Save.values();
        AppSvc.changeCalculationString(operator, true);
        Save.operator(operator);
        break;
    }
  },
  equally: function () {
    if (operator !== undefined) {
      Save.values();
      if (secondVal !== undefined) {
        AppSvc.changeCalculationString("equally", false);
        AppSvc.calculationAction(operator);
        Save.operator(operator);
        flagLastPress = "equally";
      }
    }
  },
  plusMinus: function () {
    field = field - field * 2;
    FieldSvc.renew();
  },
  percent: function () {
    if ((operator !== undefined) && (flagLastPress == 'num')) {
      field = (firstVal * parseFloat(field) / 100).toString();
      FieldSvc.renew();
    }
  },
  reciproc: function () {
    if (flagLastPress !== 'operator') {
      flagLastPress = 'specialOperator';
      calculationString = ['1', '/', parseFloat(field), '='];
      field = 1 / field;
      AppSvc.specialOperatorProcess();
    }
  },
  squareRoot: function () {
    if (flagLastPress !== 'operator') {
      flagLastPress = 'specialOperator';
      calculationString = [parseFloat(field), '&#8730;', '='];
      field = Math.sqrt(field);
      AppSvc.specialOperatorProcess();
    }
  },
  backspace: function () {
    if (!flagOperator) {
      if ((field.toString().length <= 1)) {
        field = 0;
      } else {
        field = field.toString().slice(0, -1)
      }
      FieldSvc.renew();
    }
  },
  clearError: function () {
    field = 0;
    FieldSvc.renew();
  }
}


