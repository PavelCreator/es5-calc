"use strict";
window.captureEvents(Event.KEYPRESS);
window.onkeypress = pressed;
function pressed(e) {
  var ctrlDown = e.ctrlKey||e.metaKey // Mac support
  switch (e.which) {
    /*Operators*/
    case 107://+
      Press.operator("plus");
      break;

    case 45://-
      Press.operator("minus");
      break;

    case 109://-
      Press.operator("minus");//-
      break;

    case 189://-
      Press.operator("minus");//-
      break;

    case 106://*
      Press.operator("multiply");
      break;

    case 111://\/
      Press.operator("divide");
      break;

    /*Service buttons*/
    case 13://Enter
      Press.equally();
      break;

    case 187://=
      Press.equally();
      break;

    case 27://ESC, Del
      AppSvc.reset();
      break;

    case 192://`
      AppSvc.reset();
      break;

    case 8://Backspace
      Press.backspace();
      break;

    /*Memory*/
    case 77://MS
      Memory.save();
      break;

    /*Clipboard*/
    case 67:
      if (ctrlDown) {
        Clipboard.copy();//Ctrl+C
      }else{
        AppSvc.reset();
      }
      break;

    case 88:
      if (ctrlDown) {
        Clipboard.cut();//Ctrl+X
      }
      break;

    /*Additional Buttons*/
    case 75:
      View.showKeyboard();
      break;

    case 73:
      View.showInfo();
      break;

    /*Numbers*/
    case 48://0
      Press.num(0);
      break;

    case 96://0
      Press.num(0);
      break;

    case 49://1
      Press.num(1);
      break;

    case 97://1
      Press.num(1);
      break;

    case 50://2
      Press.num(2);
      break;

    case 98://2
      Press.num(2);
      break;

    case 51://3
      Press.num(3);
      break;

    case 99://3
      Press.num(3);
      break;

    case 52://4
      Press.num(4);
      break;

    case 100://4
      Press.num(4);
      break;

    case 53://5
      Press.num(5);
      break;

    case 101://5
      Press.num(5);
      break;

    case 54://6
      Press.num(6);
      break;

    case 102://6
      Press.num(6);
      break;

    case 55://7
      Press.num(7);
      break;

    case 103://7
      Press.num(7);
      break;

    case 56://8
      Press.num(8);
      break;

    case 104://8
      Press.num(8);
      break;

    case 57://9
      Press.num(9);
      break;

    case 105://9
      Press.num(9);
      break;

    case 44://,
      Press.num(".");
      break;

    case 188://,
      Press.num(".");
      break;

    case 46://.
      Press.num(".");
      break;

    case 190://.
      Press.num(".");
      break;

    case 110://.
      Press.num(".");
      break;
  }
  /*console.log(e.which);*/
}