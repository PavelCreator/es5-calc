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
  fieldSvc,
  calculationStringSvc,
  mathSvc,
  save,
  make,
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
  clipboardService,

  /*Entities*/
  notification,
  memory,
  clipboard,

  /*View Layout*/
  view,

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