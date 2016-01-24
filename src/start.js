/*Begin*/
clipboard.pasteCatch();
clipboard.cancelManualEntry();
reset();
fieldSvc.focus();

//only in chrome
/*if (browser() == "Google Chrome"){
  console.log(browser());
  document.getElementsByTagName('body')[0].onmousedown = function () {
/!*    document.getElementById('field').style.padding = "10px 9px 8px";*!/
  }
  document.getElementsByTagName('body')[0].onclick = function () {
/!*    document.getElementById('field').style.padding = "10px 8px 8px";*!/
    fieldSvc.focus();
  }
}else{*/
  document.getElementsByTagName('body')[0].onclick = function () {
    fieldSvc.focus();
  }
/*}*/

