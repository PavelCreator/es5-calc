"use strict";
class Save {
  static values() {
    if (firstVal === undefined) {
      firstVal = parseFloat(field);
    }
    else {
      secondVal = parseFloat(field);
    }
  };

  static operator(operatorValue) {
    operator = operatorValue;
    flagOperator = true;
  };
}