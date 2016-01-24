memory = {
  value: 0,
  showMemorySign: function () {
    document.getElementById("memory-sign").style.display = "block";
  },
  hideMemorySign: function () {
    document.getElementById("memory-sign").style.display = "none";
  },
  clear: function () {
    this.value = 0;
    this.hideMemorySign();
  },
  show: function () {
    field = this.value;
    fieldSvc.renew();
    flagLastPress = 'equally';
  },
  save: function () {
    this.value = parseFloat(field);
    flagLastPress = 'equally';
    this.showMemorySign();
  },
  plus: function () {
    this.value += parseFloat(field);
  },
  minus: function () {
    this.value -= parseFloat(field);
  },
}