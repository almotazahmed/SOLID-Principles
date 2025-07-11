// BAD EXAMPLE - Violates LSP
class Bird {
  fly() {
    return "Flying in the sky";
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!"); // Violates LSP
  }
}

// This breaks when Penguin is used
function makeBirdFly(bird) {
  return bird.fly();
}

console.log("\n=== BIRD EXAMPLE (LSP Violation) ===");
const eagle = new Bird();
const penguin = new Penguin();

console.log("Eagle:", makeBirdFly(eagle)); // Works
try {
  console.log("Penguin:", makeBirdFly(penguin)); // Throws error
} catch (e) {
  console.log("Penguin error:", e.message);
}