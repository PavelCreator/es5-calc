window.captureEvents(Event.KEYPRESS);
window.onkeypress = pressed;
function pressed(e) {
  var ctrlDown = e.ctrlKey||e.metaKey // Mac support
  switch (e.which) {
    /*Operators*/
    case 107://+
      operatorPress("plus");
      break;

    case 45://-
      operatorPress("minus");
      break;

    case 109://-
      operatorPress("minus");//-
      break;

    case 189://-
      operatorPress("minus");//-
      break;

    case 106://*
      operatorPress("multiply");
      break;

    case 111://\/
      operatorPress("divide");
      break;

    /*Service buttons*/
    case 13://Enter
      equallyPress();
      break;

    case 187://=
      equallyPress();
      break;

    case 27://ESC, Del
      reset();
      break;

    case 192://`
      reset();
      break;

    case 8://Backspace
      backspacePress();
      break;

    /*Memory*/
    case 77://MS
      memory.save();
      break;

    /*Clipboard*/
    case 67:
      if (ctrlDown) {
        clipboard.copy();//Ctrl+C
      }
      break;

    case 88:
      if (ctrlDown) {
        clipboard.cut();//Ctrl+X
      }
      break;

    /*Additional Buttons*/
    case 75:
      info.showKeyboard();
      break;

    case 73:
      info.showInfo();
      break;

    /*Numbers*/
    case 48://0
      numPress(0);
      break;

    case 96://0
      numPress(0);
      break;

    case 49://1
      numPress(1);
      break;

    case 97://1
      numPress(1);
      break;

    case 50://2
      numPress(2);
      break;

    case 98://2
      numPress(2);
      break;

    case 51://3
      numPress(3);
      break;

    case 99://3
      numPress(3);
      break;

    case 52://4
      numPress(4);
      break;

    case 100://4
      numPress(4);
      break;

    case 53://5
      numPress(5);
      break;

    case 101://5
      numPress(5);
      break;

    case 54://6
      numPress(6);
      break;

    case 102://6
      numPress(6);
      break;

    case 55://7
      numPress(7);
      break;

    case 103://7
      numPress(7);
      break;

    case 56://8
      numPress(8);
      break;

    case 104://8
      numPress(8);
      break;

    case 57://9
      numPress(9);
      break;

    case 105://9
      numPress(9);
      break;

    case 44://,
      numPress(".");
      break;

    case 188://,
      numPress(".");
      break;

    case 46://.
      numPress(".");
      break;

    case 190://.
      numPress(".");
      break;

    case 110://.
      numPress(".");
      break;
  }
  /*console.log(e.which);*/
}