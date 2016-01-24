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
    focusToField();
  },
  show: function () {
    field = this.value;
    renewField();
    flagLastPress = 'equally';
    focusToField();
  },
  save: function () {
    this.value = parseFloat(field);
    flagLastPress = 'equally';
    this.showMemorySign();
    focusToField();
  },
  plus: function () {
    this.value += parseFloat(field);
    focusToField();
  },
  minus: function () {
    this.value -= parseFloat(field);
    focusToField();
  },
}