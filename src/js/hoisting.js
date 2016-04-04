"use strict";
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
  Save,
  Make,
  FieldSvc,
  CalculationStringSvc,
  MathSvc,
  ClassFnc,

  logger,
  logger2,

  /*App Services*/
  AppSvc,
  ClipboardService,

  /*Entities*/
  Memory,
  Clipboard,

  /*View Layout*/
  View,
  Notification,

  /*Handler Services*/
  Press,

  /*Timeouts*/
  notificationTimeout,
  warningClassTimeout;