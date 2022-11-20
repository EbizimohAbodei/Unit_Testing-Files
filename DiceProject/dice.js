"use strict";

module.exports = class Dice {
  constructor(upperBound = 6) {
    if (!Number.isInteger(upperBound)) {
      throw new Error("Upper bound must be an integer");
    }

    if (upperBound > 20) {
      throw new Error("Upper bound too big");
    }

    if (upperBound < 2) {
      throw new Error("Upper bound too small");
    }

    this.ubound = upperBound;
    this.dotCount = 0;
  }

  get dots() {
    return this.dotCount;
  }

  get minimumValue() {
    return 1;
  }

  get maximumValue() {
    return this.ubound;
  }

  toString() {
    return this.dotCount === 0 ? "Dice not rolled yet" : `${this.dots}`;
  }

  roll(ubound) {
    this.dotCount = Math.ceil(Math.random() * this.ubound);
  }
};
