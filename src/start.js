/*Begin*/
clipboard.pasteCatch();
clipboard.cancelManualEntry();
reset();
focusToField();

document.getElementsByTagName('body')[0].onmousedown = function () {
  document.getElementById('field').style.padding = "10px 9px 8px";
}

document.getElementsByTagName('body')[0].onclick = function () {
  document.getElementById('field').style.padding = "10px 8px 8px";
  focusToField();
}