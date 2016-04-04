"use strict";
class MathSvc {
  static fix() {
    return 1000000;
  }

  static sum(a1, a2) {
    return (a1 * this.fix() + a2 * this.fix()) / this.fix();
  };

  static subtraction(a1, a2) {
    return (a1 * this.fix() - a2 * this.fix()) / this.fix();
  };

  static multiplication(a1, a2) {
    return (a1 * this.fix() * a2) / this.fix();
  };

  static division(a1, a2) {
    return (a1 * this.fix() / a2) / this.fix();
  }
}