const findTheOldest = function(array) {
  array.forEach((person) => {
    if (person.yearOfDeath == undefined) {
      let currentYear = new Date().getFullYear()
      person.yearOfDeath = currentYear
    }
  })

 let ages = array.map((age) => age.yearOfDeath - age.yearOfBirth)
 
 let oldestAgeIndex = ages.indexOf(Math.max(...ages))
 
 let oldestPerson = array[oldestAgeIndex]
 
 return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
