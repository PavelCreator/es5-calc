notification = {
  delay: 2500,
  show: function (text) {
    clearTimeout(notificationTimeout);
    document.getElementById("notifications").innerHTML = text;
    document.getElementById("calculation-string").style.display = "none";
    document.getElementById("notifications").style.display = "block";
    this.timeout();
    fieldSvc.focus();
  },
  info: function (text) {
    classFnc.remove(document.getElementById("notifications"), "warning");
    this.show(text);
  },
  warning: function (text) {
    classFnc.add(document.getElementById("notifications"), "warning");
    this.show(text);
    setTimeout(function () {
        classFnc.remove(document.getElementById("notifications"), "warning");
    }, this.delay);
  },
  timeout: function(){
    notificationTimeout = setTimeout(function () {
      document.getElementById("calculation-string").style.display = "block";
      document.getElementById("notifications").style.display = "none";

    }, this.delay)
  }
}
