// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(x => x.toLowerCase());
}

function nameToAttributes(names) {
  const result = [];
  names.map(function (x) {
    let first_and_last = x.split(" ");
    result.push({firstName: first_and_last[0], lastName: first_and_last[1]});
  })
  return result;
}

function attributesToPhrase(names) {
  const result = [];
  names.map(function (x) {
    result.push("#{x.name} if from #{x.hometown}");
  })
}
