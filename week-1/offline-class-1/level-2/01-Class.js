//class
class animal {
  constructor(name, legCount, speak) {
    this.name = name;
    this.legCount = legCount;
    this.speak = speak;
  }

  static myType() {
    console.log("Animal");
  }
  speaks() {
    console.log("hi there " + this.speak);
  }
}

let dog = new animal("dog", 2, "bhau bhau");
let lion = new animal("sambhav", 2, "roar roar");

lion.speaks();

console.log(animal.myType());
