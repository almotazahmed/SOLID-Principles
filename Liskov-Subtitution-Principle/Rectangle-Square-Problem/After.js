// GOOD EXAMPLE - Follows LSP
class Shape {
  getArea() {
    throw new Error("getArea must be implemented");
  }
}

class GoodRectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
}

class GoodSquare extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  
  getArea() {
    return this.side * this.side;
  }
}

// Usage works correctly for both
function calculateArea(shape) {
  return shape.getArea();
}

console.log("\n=== GOOD EXAMPLE (LSP Compliant) ===");
const goodRect = new GoodRectangle(5, 4);
const goodSquare = new GoodSquare(4);

console.log("Rectangle area:", calculateArea(goodRect)); // 20 ✓
console.log("Square area:", calculateArea(goodSquare));   // 16 ✓