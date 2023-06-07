const getFirstNames = (list) => {
  return list.map((eachPerson) => eachPerson.firstName);
};
module.exports = getFirstNames;

const getPeopleInCity = require("/home/workspace/coding-practices/coding-practice-2c/names/index.js");
console.log(getPeopleInCity(getFirstNames));
