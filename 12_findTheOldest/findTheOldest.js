const findTheOldest = function(people) {
  return people.reduce((oldestPerson, person) => {
    if (!('yearOfDeath' in person)) {
      person.age = new Date().getFullYear() - person.yearOfBirth;
    } else {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }
    if (!('age' in oldestPerson) || oldestPerson.age < person.age) {
      oldestPerson = person;
    }
    return oldestPerson;
  }, {});
}

// Do not edit below this line
module.exports = findTheOldest;