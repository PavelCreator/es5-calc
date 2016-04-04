"use strict";
class Clipboard {

  static toClipboard() {
    var textArea = document.createElement("textarea");
    textArea.value = field;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  static copy() {
    this.toClipboard();
    Notification.info("Copied to the clipboard");
  };

  static cut() {
    this.toClipboard();
    AppSvc.reset();
    Notification.info("Cut to the clipboard");
  };

  static pasteCatch() {
    document.getElementById('field').onpaste = function (e) {
      var pastedText = undefined;
      if (window.clipboardData && window.clipboardData.getData) {
        pastedText = window.clipboardData.getData('Text');
      } else if (e.clipboardData && e.clipboardData.getData) {
        pastedText = e.clipboardData.getData('text/plain');
      }
      if (ClipboardService.pastedTextValidation(pastedText)) {
        field = pastedText;
        FieldSvc.renew();
        Notification.info("Inserted from the clipboard");
      }
      ;
      return false;
    };
  };

  static cancelManualEntry() {
    document.getElementById('field').onkeydown = function (event) {
      event.preventDefault();
      var key = event.keyCode || event.charCode;
      if (key == 8 || key == 46) {
        Press.backspace();
        return false;
      }
      if (key == 116) {
        location.reload();
      }
      pressed(event);
    }
  }
}