"use strict";
Notification = {
  delay: 2500,
  show: function (text) {
    clearTimeout(notificationTimeout);
    document.getElementById("notifications").innerHTML = text;
    document.getElementById("calculation-string").style.display = "none";
    document.getElementById("notifications").style.display = "block";
    this.timeout();
    FieldSvc.focus();
  },
  hide: function(){
    document.getElementById("calculation-string").style.display = "block";
    document.getElementById("notifications").style.display = "none";
  },
  info: function (text) {
    ClassFnc.remove(document.getElementById("notifications"), "warning");
    this.show(text);
  },
  warning: function (text) {
    clearTimeout(warningClassTimeout);
    ClassFnc.add(document.getElementById("notifications"), "warning");
    this.show(text);
    warningClassTimeout = setTimeout(function () {
        ClassFnc.remove(document.getElementById("notifications"), "warning");
    }, this.delay);
  },
  timeout: function(){
    notificationTimeout = setTimeout(function () {
      Notification.hide();
    }, this.delay)
  }
}
