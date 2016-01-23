window.captureEvents(Event.KEYPRESS);
window.onkeypress = pressed;
function pressed(e) {
  switch (e.which) {
    /*Keys*/
    case 48:
      numPress(0);
      break;

    case 49:
      numPress(1);
      break;

    case 50:
      numPress(2);
      break;

    case 51:
      numPress(3);
      break;

    case 52:
      numPress(4);
      break;

    case 53:
      numPress(5);
      break;

    case 54:
      numPress(6);
      break;

    case 55:
      numPress(7);
      break;

    case 56:
      numPress(8);
      break;

    case 57:
      numPress(9);
      break;

    case 44:
      numPress(".");
      break;

    case 46:
      numPress(".");
      break;

    /*Operators*/
    case 43:
      operatorPress("plus");
      break;

    case 45:
      operatorPress("minus");
      break;

    case 42:
      operatorPress("multiply");
      break;

    case 47:
      operatorPress("divide");
      break;

    case 37:
      percentPress();

    /*Special*/
    case 13:
      equallyPress();
      break;

    case 61:
      equallyPress();
      break;

    case 0:
      reset();
      break;

    case 1089:
      reset();
      break;

    case 1057:
      reset();
      break;

    case 99:
      reset();
      break;

    case 67:
      reset();
      break;

  }
  /*alert(e.which);*/
}