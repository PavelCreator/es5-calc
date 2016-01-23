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
  renewField();
}

operatorPress = function (operator) {
  switch (flagLastPress) {
    case "num":
      flagLastPress = 'operator';
      saveValues();
      changeCalculationString(operator, false);
      if (secondVal !== undefined) {
        var operatorWord = makeOperatorWord(calculationString[calculationString.length - 3]);
        calculationAction(operatorWord);
      }
      saveOperator(operator);
      break;

    case "operator":
      calculationString.splice(-1, 1);
      changeCalculationString(operator, true);
      saveOperator(operator);
      break;

    case "equally":
      calculationString.splice(-1, 1);
      flagLastPress = 'operator';
      saveValues();
      changeCalculationString(operator, true);
      saveOperator(operator);

      break;
  }
}

equallyPress = function () {
  if (operator !== undefined) {
    saveValues();
    if (secondVal !== undefined) {
      changeCalculationString("equally", false);
      calculationAction(operator);
      saveOperator(operator);
      flagLastPress = "equally";
    }
  }
}

plusMinusPress = function () {
  field = field - field * 2;
  renewField();
}

percentPress = function () {
  if ((operator !== undefined) && (flagLastPress == 'num')) {
    field = (firstVal * parseFloat(field) / 100).toString();
    renewField();
  }
}