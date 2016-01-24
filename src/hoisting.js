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
  focusToField,
  logger,
  logger2,
  browser,

  /*App Services*/
  reset,
  calculationAction,
  changeCalculationString,
  reciprocCalculationString,
  percentAction,
  specialOperatorProcess,

  /*Entities*/
  notification,
  memory,
  clipboard,
  info,

  /*Handler Services*/
  numPress,
  operatorPress,
  equallyPress,
  plusMinusPress,
  percentPress,
  reciprocPress,
  squareRootPress,
  backspacePress,
  clearErrorPress

  ;