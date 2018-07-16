// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(x => x.toLowerCase());
}

function nameToAttributes(names) {
  const result = {};
  names.map(function (x) {
    let first_and_last = x.split(" ");
    console.log(first_and_last);
    result.firstName = first_and_last[0];
    result.lastName = first_and_last[1];
  })
  return result;
}

const drivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];
nameToAttributes(drivers);
