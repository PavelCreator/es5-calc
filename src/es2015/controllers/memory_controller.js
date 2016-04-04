"use strict";
class Memory {
  constructor() {
    this.value = 0;
  };

  static showMemorySign() {
    document.getElementById("memory-sign").style.display = "block";
  };

  static hideMemorySign() {
    document.getElementById("memory-sign").style.display = "none";
  };

  static clear() {
    if (memory.value == 0) {
      Notification.warning("Memory cell is empty");
      return false;
    }
    memory.value = 0;
    this.hideMemorySign();
    Notification.info("Memory has been cleaned");
  };

  static show() {
    if (memory.value == 0) {
      Notification.warning("Memory cell is empty");
      return false;
    }
    field = memory.value;
    FieldSvc.renew();
    flagLastPress = 'equally';
    Notification.info("Extracted from memory");
  };

  static save() {
    if (parseFloat(field) == 0) {
      Notification.warning("Enter the number before saving");
      return false;
    }
    memory.value = parseFloat(field);
    flagLastPress = 'equally';
    this.showMemorySign();
    Notification.info("Stored in memory");
  };

  static plus() {
    if (memory.value == 0) {
      Notification.warning("Memory cell is empty");
      return false;
    }
    memory.value += parseFloat(field);
    this.showMemorySign();
    Notification.info("Summed with value in the memory");
  };

  static minus() {
    if (memory.value == 0) {
      Notification.warning("Memory cell is empty");
      return false;
    }
    memory.value -= parseFloat(field);
    this.showMemorySign();
    Notification.info("Deducted from value in the memory");
  };
}
var memory = new Memory();