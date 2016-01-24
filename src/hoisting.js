var
  /*Variables*/
  field,
  firstVal,
  secondVal,
  operator,
  calculationString,

  /*Flags*/
  flagOperator,
  flagLastPress,

  /*FUNCTIONS*/

  /*Auxiliary Services*/
  renewField,
  resetCalculationString,
  saveValues,
  saveOperator,
  makeOperatorWord,
  makeOperatorSign,
  renewCalculationString,
  logger,
  logger2,

  /*App Services*/
  reset,
  calculationAction,
  changeCalculationString,
  reciprocCalculationString,
  percentAction,
  specialOperatorProcess,

  /*Handler Services*/
  numPress,
  operatorPress,
  equallyPress,
  plusMinusPress,
  percentPress,
  reciprocPress,
  squareRootPress,
  backspacePress,
  clearErrorPress,

  /*Memory*/
  notification,
  memory,
  clipboard

  ;