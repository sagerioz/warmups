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

function Animal(name, sound, food){
  this.name = name;
  this.sound = sound;
  this.food = food;
}

let cow = new Animal("Floozie", "Mooo!", "hay")
console.log(cow)

Animal.prototype.breed = this.breed;

let dog = new Animal("Elmer", "ruff!", "bacon, please")
dog.breed = "collie";
console.log(dog)

Animal.prototype.message = function(){return "I am " + this.name + " and I love to eat " + this.food + "!"};
console.log(dog.message())
