clipboard = {
  vm: this,
  toClipboard: function () {
    var textArea = document.createElement("textarea");
    textArea.value = field;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  },
  copy: function () {
    this.toClipboard();
    notification.show("Copied to the clipboard");
  },
  cut: function () {
    this.toClipboard();
    reset();
    notification.show("Cut to the clipboard");
  },
  pasteCatch: function () {
    document.getElementById('field').onpaste = function (e) {
      var pastedText = undefined;
      if (window.clipboardData && window.clipboardData.getData) {
        pastedText = window.clipboardData.getData('Text');
      } else if (e.clipboardData && e.clipboardData.getData) {
        pastedText = e.clipboardData.getData('text/plain');
      }
      if(clipboardService.pastedTextValidation(pastedText)){
        field = pastedText;
        fieldSvc.renew();
        notification.show("Inserted from the clipboard");
      };
      return false;
    };
  },
  cancelManualEntry: function(){
    document.getElementById('field').onkeydown = function(event){
      event.preventDefault();
      var key = event.keyCode || event.charCode;
      if (key == 8 || key == 46) {
        backspacePress();
        return false;
      }
      if (key == 116){
        location.reload();
      }
      pressed(event);
    }
  }
}