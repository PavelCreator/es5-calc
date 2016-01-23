window.captureEvents(Event.KEYPRESS);
window.onkeypress = pressed;
function pressed(e) {
  switch (e.which) {
    /*Keys*/
    case 48://0
      numPress(0);
      break;

    case 49://1
      numPress(1);
      break;

    case 50://2
      numPress(2);
      break;

    case 51://3
      numPress(3);
      break;

    case 52://4
      numPress(4);
      break;

    case 53://5
      numPress(5);
      break;

    case 54://6
      numPress(6);
      break;

    case 55://7
      numPress(7);
      break;

    case 56://8
      numPress(8);
      break;

    case 57://9
      numPress(9);
      break;

    case 44://,
      numPress(".");
      break;

    case 46://.
      numPress(".");
      break;

    /*Operators*/
    case 43://+
      operatorPress("plus");
      break;

    case 45://-
      operatorPress("minus");
      break;

    case 42://*
      operatorPress("multiply");
      break;

    case 47://\/
      operatorPress("divide");
      break;

    case 37://%
      percentPress();

    /*Special*/
    case 13://Enter
      equallyPress();
      break;

    case 61://=
      equallyPress();
      break;

    case 0://ESC, Del
      reset();
      break;

    case 96://`
      reset();
      break;

    case 126://~
      reset();
      break;

    case 1105://¸
      reset();
      break;

    case 1125://¨
      reset();
      break;

    case 8://Backspace
      backspacePress();
      break;

  }
  /*alert(e.which);*/
}