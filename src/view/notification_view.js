notification = {
  show: function (text) {
    clearTimeout(notificationTimeout);
    document.getElementById("notifications").innerHTML = text;
    document.getElementById("calculation-string").style.display = "none";
    document.getElementById("notifications").style.display = "block";
    this.timeout();
    fieldSvc.focus();
  },
  timeout: function(){
    notificationTimeout = setTimeout(function () {
      document.getElementById("calculation-string").style.display = "block";
      document.getElementById("notifications").style.display = "none";
    }, 2500)
  }
}
