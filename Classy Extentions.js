class Cat extends Animal {
  speak() {
    return this.name + ' meows.';
  }
}
let cat = new Cat('Lamp');
console.log(cat);
