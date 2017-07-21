function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.name = function() {return this.firstName + " " + this.lastName;};
}


Person.prototype.bio = function () {
  return `${this.firstName} is ${this.age} years old and lives in ${this.hometown}`
}

Person.prototype.hometown = this.hometown;

let father = new Person("Sterlie", "Epperson", 50)
father.hometown = "Downieville"
console.log(father.bio());
