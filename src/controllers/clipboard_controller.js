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
  paste: function () {
    notification("Please insert in the field manually");
  },
  copy: function () {
    this.toClipboard();
    notification("Copied to the clipboard");
  },
  cut: function () {
    this.toClipboard();
    reset();
    notification("Cut to the clipboard");
  },
  pasteCatch: function () {
    document.getElementById('field').onpaste = function (e) {
      var pastedText = undefined;
      if (window.clipboardData && window.clipboardData.getData) {
        pastedText = window.clipboardData.getData('Text');
      } else if (e.clipboardData && e.clipboardData.getData) {
        pastedText = e.clipboardData.getData('text/plain');
      }

      if (pastedText.match(/^[0-9\.,]+$/) == null) {
        notification("Data from clipboard is not a number");
      }else{
        if (pastedText.indexOf(",") != -1) {
          pastedText = pastedText.replace(/,/g, ".")
        }
        var dotCount = 0;
        for (i = 0; i < pastedText.length; i++) {
          if (pastedText.charAt(i) == ".") {
            dotCount++;
          }
        }
        if (dotCount > 1){
          notification("Data from clipboard is not a number");
        }else{
          if (pastedText.charAt(0) == "."){
            pastedText = "0" + pastedText;
          }
          field = pastedText;
          renewField();
        }
      }
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