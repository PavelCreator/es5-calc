"use strict";
class Notification {
  static delay() {
    return 2500;
  }

  static show(text) {
    clearTimeout(notificationTimeout);
    document.getElementById("notifications").innerHTML = text;
    document.getElementById("calculation-string").style.display = "none";
    document.getElementById("notifications").style.display = "block";
    this.timeout();
    FieldSvc.focus();
  };

  static hide() {
    document.getElementById("calculation-string").style.display = "block";
    document.getElementById("notifications").style.display = "none";
  };

  static info(text) {
    ClassFnc.remove(document.getElementById("notifications"), "warning");
    this.show(text);
  };

  static warning(text) {
    clearTimeout(warningClassTimeout);
    ClassFnc.add(document.getElementById("notifications"), "warning");
    this.show(text);
    warningClassTimeout = setTimeout(function () {
      ClassFnc.remove(document.getElementById("notifications"), "warning");
    }, this.delay());
  };

  static timeout() {
    notificationTimeout = setTimeout(function () {
      Notification.hide();
    }, this.delay())
  }
}
