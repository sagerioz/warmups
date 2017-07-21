function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.name = function() {return this.firstName + " " + this.lastName;};
}
var daughter = new Person("Rio", "Dawson", 18)
console.log(daughter);
