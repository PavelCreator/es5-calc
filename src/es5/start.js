"use strict";
/*Begin*/
Clipboard.pasteCatch();
Clipboard.cancelManualEntry();
AppSvc.reset();
FieldSvc.focus();

//only in chrome
document.getElementsByTagName('body')[0].onclick = function () {
  FieldSvc.focus();
}