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
  logger,
  logger2,


  /*App Services*/
  reset,
  calculationAction,
  changeCalculationString,
  percentAction,

  /*Handler Services*/
  numPress,
  operatorPress,
  equallyPress,
  plusMinusPress,
  percentPress
  ;