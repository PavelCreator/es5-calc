notification = function (text) {
  document.getElementById("notifications").innerHTML = text;
  document.getElementById("calculation-string").style.display = "none";
  document.getElementById("notifications").style.display = "block";
  setTimeout(function () {
    document.getElementById("calculation-string").style.display = "block";
    document.getElementById("notifications").style.display = "none";
  }, 2500);
  focusToField();
};