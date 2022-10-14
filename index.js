const pavan = require("../country/state/city/index.js");

const getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (list) => {
  return list.map((each) => each.firstName);
};

module.exports = getPeopleInCity(pavan);
console.log(getPeopleInCity(pavan));
