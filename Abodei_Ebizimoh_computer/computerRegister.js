"use strict";

module.exports = class computerRegister {
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.computerData = data;
  }

  get_All_computers_By_processor(searchValue) {
    const foundTypes = [];
    if (!searchValue) {
      throw new Error("missing parameter");
    } else {
      for (let computer of this.computerData) {
        if (computer.processor == searchValue) {
          foundTypes.push(computer);
        }
      }
    }
    return foundTypes;
  }

  get_diskspace_of_computer_by_computerName(name) {
    let foundTypes = null;
    if (!name) {
      throw new Error("missing parameter");
    } else {
      for (let computer of this.computerData) {
        if (computer.computerName == name) {
          return computer.diskspace;
        }
      }
    }
    return foundTypes;
  }

  get_total_prices_of_computers_by_processor(processorName) {
    let sum = 0;
    if (!processorName) {
      throw new Error("missing parameter");
    } else {
      for (let computer of this.computerData) {
        if (computer.processor == processorName) {
          sum += computer.price;
        }
      }
      if (sum == 0) {
        throw new Error("nothing found with given");
      }
      return sum;
    }
  }

  get_a_computer_matching_id(id) {
    let foundData = null;
    if (!id) {
      throw new Error("missing parameter");
    }
    if (typeof id !== "number") {
      return null;
    } else {
      for (let computer of this.computerData) {
        if (computer.id == id) {
          return computer;
        }
      }
      return foundData;
    }
  }

  get_computer_accessories(id) {
    let foundData = [];
    if (typeof id !== "number") {
      return foundData;
    } else {
      for (let computer of this.computerData) {
        if (computer.id == id) {
          return computer.accessories;
        }
      }
      return foundData;
    }
  }
};
