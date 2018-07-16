// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(x => x.toLowerCase());
}

function nameToAttributes(names) {
  const result = {};
  names.map(function (x) {
    let first_and_last = x.split(" ");
    result.firstName = first_and_last[0];
    result.lastName = first_and_last[1];
  })
