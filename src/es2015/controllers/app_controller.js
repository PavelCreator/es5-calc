"use strict";
class Press {
  static num(num) {
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
  };

  static operator(operator) {
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
  };

  static equally() {
    if (operator !== undefined) {
      Save.values();
      if (secondVal !== undefined) {
        AppSvc.changeCalculationString("equally", false);
        AppSvc.calculationAction(operator);
        Save.operator(operator);
        flagLastPress = "equally";
      }
    }
  };

  static plusMinus() {
    field = field - field * 2;
    FieldSvc.renew();
  };

  static percent() {
    if ((operator !== undefined) && (flagLastPress == 'num')) {
      field = (firstVal * parseFloat(field) / 100).toString();
      FieldSvc.renew();
    }
  };

  static reciproc() {
    if (flagLastPress !== 'operator') {
      flagLastPress = 'specialOperator';
      calculationString = ['1', '/', parseFloat(field), '='];
      field = 1 / field;
      AppSvc.specialOperatorProcess();
    }
  };

  static squareRoot() {
    if (flagLastPress !== 'operator') {
      flagLastPress = 'specialOperator';
      calculationString = [parseFloat(field), '&#8730;', '='];
      field = Math.sqrt(field);
      AppSvc.specialOperatorProcess();
    }
  };

  static backspace() {
    if (!flagOperator) {
      if ((field.toString().length <= 1)) {
        field = 0;
      } else {
        field = field.toString().slice(0, -1)
      }
      FieldSvc.renew();
    }
  };

  static clearError() {
    field = 0;
    FieldSvc.renew();
  };
}


