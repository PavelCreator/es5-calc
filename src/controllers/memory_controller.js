memory = {
  value: 0,
  showMemorySign: function () {
    document.getElementById("memory-sign").style.display = "block";
  },
  hideMemorySign: function () {
    document.getElementById("memory-sign").style.display = "none";
  },
  clear: function () {
    if (this.value == 0){
      notification.warning("Memory cell is empty");
      return false;
    }
    this.value = 0;
    this.hideMemorySign();
    notification.info("Memory has been cleaned");
  },
  show: function () {
    if (this.value == 0){
      notification.warning("Memory cell is empty");
      return false;
    }
    field = this.value;
    fieldSvc.renew();
    flagLastPress = 'equally';
    notification.info("Extracted from memory");
  },
  save: function () {
    if (parseFloat(field) == 0){
      notification.warning("Enter the number before saving");
      return false;
    }
    this.value = parseFloat(field);
    flagLastPress = 'equally';
    this.showMemorySign();
    notification.info("Stored in memory");
  },
  plus: function () {
    if (this.value == 0){
      notification.warning("Memory cell is empty");
      return false;
    }
    this.value += parseFloat(field);
    this.showMemorySign();
    notification.info("Summed with value in the memory");
  },
  minus: function () {
    if (this.value == 0){
      notification.warning("Memory cell is empty");
      return false;
    }
    this.value -= parseFloat(field);
    this.showMemorySign();
    notification.info("Deducted from value in the memory");
  },
}