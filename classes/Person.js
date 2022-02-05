class Person {
  constructor(name) {
    this.name = name;
  }

  greet(otherName) {
    return `Hi ${otherName}, I'm ${this.name}.`;
  }
}

module.exports = Person;
