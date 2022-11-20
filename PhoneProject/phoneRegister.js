"use strict";

module.exports = class PhoneRegister {
  constructor(data) {
    if (!data) throw new Error("phone data missing");
    this.phoneData = data;
  }

  getTypes() {
    const foundTypes = [];
    for (let person of this.phoneData) {
      if (person.phone) {
        for (let phone of person.phone) {
          if (phone.type && phone.type !== "") {
            if (!foundTypes.includes(phone.type)) {
              foundTypes.push(phone.type);
            }
          }
        }
      }
    }
    return foundTypes;
  }

  getPersonsNumberByType(firstname, lastname, type) {
    if (firstname && lastname && type) {
      const numbersFound = [];

      for (let person of this.phoneData) {
        if (person.firstname === firstname && person.lastname === lastname) {
          for (let phone of person.phone) {
            if (phone.type === type) {
              numbersFound.push(phone.number);
            }
          }
        }
      }
      return numbersFound;
    } else {
      throw new Error("missing parameter");
    }
  }

  getAllNumbersByType(type) {
    if (type) {
      const numbersFound = [];

      for (let person of this.phoneData) {
        if (person.phone) {
          for (let phone of person.phone) {
            if (phone.type === type) {
              if (phone.number && phone.number.length > 0) {
                numbersFound.push({
                  firstname: person.firstname,
                  lastname: person.lastname,
                  number: {
                    type: phone.type,
                    tel: phone.number,
                  },
                });
              }
            }
          }
        }
      }
      return numbersFound;
    } else {
      throw new Error("missing parameter");
    }
  }

  getAllNumbers() {
    const personsFound = [];
    for (let person of this.phoneData) {
      if (person.phone && person.phone.length > 0) {
        personsFound.push(person);
      }
    }
    return personsFound;
  }

  getName(number) {
    for (let person of this.phoneData) {
      for (let phone of person.phone) {
        if (phone.number === number) {
          return { firstname: person.firstname, lastname: person.lastname };
        }
      }
    }
    return null;
  }
};
