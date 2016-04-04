"use strict";
Save = {
  values: function () {
    if (firstVal === undefined) {
      firstVal = parseFloat(field);
    }
    else {
      secondVal = parseFloat(field);
    }
  },
  operator: function (operatorValue) {
    operator = operatorValue;
    flagOperator = true;
  }
}