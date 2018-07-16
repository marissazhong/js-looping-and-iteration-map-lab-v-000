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
    result.push("${x.name} is from ${x.hometown}");
  })
  return result;
}

const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh'  },
  { name: 'Sammy',   hometown: 'New York'    },
  { name: 'Sally',   hometown: 'Cleveland'   },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby',   hometown: 'Tampa Bay'   }
];

console.log(attributesToPhrase(drivers));
