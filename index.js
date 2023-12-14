const names = require("./names.json");
const surnames = require("./surnames.json");

function getPeopleArray(size) {
  const people = [];
  for (let i = 1; i < size + 1; i++) {
    const human = {
      id: i,
      name: names[Math.floor(Math.random() * names.length)],
      surname: surnames[Math.floor(Math.random() * surnames.length)],
      age: Math.floor(Math.random() * 100),
    };
    people.push(human);
  }
  return people;
}

module.exports = getPeopleArray;
