info = {
  showInfo: function(){
    document.getElementById("calc").style.display = "none";
    document.getElementById("info").style.display = "block";
  },
  showKeyboard: function(){
    document.getElementById("calc").style.display = "none";
    document.getElementById("keyboard").style.display = "block";
  },
  showCalc: function(){
    document.getElementById("info").style.display = "none";
    document.getElementById("keyboard").style.display = "none";
    document.getElementById("calc").style.display = "block";
  }
}