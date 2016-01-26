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
    notification.show("Memory has been cleaned");
  },
  show: function () {
    field = this.value;
    fieldSvc.renew();
    flagLastPress = 'equally';
    notification.show("Extracted from memory");
  },
  save: function () {
    this.value = parseFloat(field);
    flagLastPress = 'equally';
    this.showMemorySign();
    notification.show("Stored in memory");
  },
  plus: function () {
    this.value += parseFloat(field);
    notification.show("Summed with value in the memory");
  },
  minus: function () {
    this.value -= parseFloat(field);
    notification.show("Deducted from value in the memory");
  },
}