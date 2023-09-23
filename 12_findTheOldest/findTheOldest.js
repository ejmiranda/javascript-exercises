const findTheOldest = function(people) {
 return people.reduce((oldestPerson, person) => {
  if (!person.yearOfDeath) {
    person.age = new Date().getFullYear - person.yearOfBirth;
  } else {
    person.age = person.yearOfDeath - person.yearOfBirth;
  }
  if (Object.keys(oldestPerson).length === 0) {
    
  }
  
 })
}, {};

// Do not edit below this line
module.exports = findTheOldest;
