"use strict";
Memory = {
  value: 0,
  showMemorySign: function () {
    document.getElementById("memory-sign").style.display = "block";
  },
  hideMemorySign: function () {
    document.getElementById("memory-sign").style.display = "none";
  },
  clear: function () {
    if (this.value == 0){
      Notification.warning("Memory cell is empty");
      return false;
    }
    this.value = 0;
    this.hideMemorySign();
    Notification.info("Memory has been cleaned");
  },
  show: function () {
    if (this.value == 0){
      Notification.warning("Memory cell is empty");
      return false;
    }
    field = this.value;
    FieldSvc.renew();
    flagLastPress = 'equally';
    Notification.info("Extracted from memory");
  },
  save: function () {
    if (parseFloat(field) == 0){
      Notification.warning("Enter the number before saving");
      return false;
    }
    this.value = parseFloat(field);
    flagLastPress = 'equally';
    this.showMemorySign();
    Notification.info("Stored in memory");
  },
  plus: function () {
    if (this.value == 0){
      Notification.warning("Memory cell is empty");
      return false;
    }
    this.value += parseFloat(field);
    this.showMemorySign();
    Notification.info("Summed with value in the memory");
  },
  minus: function () {
    if (this.value == 0){
      Notification.warning("Memory cell is empty");
      return false;
    }
    this.value -= parseFloat(field);
    this.showMemorySign();
    Notification.info("Deducted from value in the memory");
  },
}