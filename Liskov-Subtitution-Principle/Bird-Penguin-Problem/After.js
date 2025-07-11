// GOOD EXAMPLE - Follows LSP
class Animal {
  move() {
    return "Moving";
  }
}

class FlyingBird extends Animal {
  move() {
    return "Flying in the sky";
  }
  
  fly() {
    return this.move();
  }
}

class SwimmingBird extends Animal {
  move() {
    return "Swimming in water";
  }
  
  swim() {
    return this.move();
  }
}

function moveAnimal(animal) {
  return animal.move();
}

console.log("\n=== GOOD BIRD EXAMPLE (LSP Compliant) ===");
const goodEagle = new FlyingBird();
const goodPenguin = new SwimmingBird();

console.log("Eagle:", moveAnimal(goodEagle));   // Flying in the sky
console.log("Penguin:", moveAnimal(goodPenguin)); // Swimming in water