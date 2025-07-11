// BAD EXAMPLE - Violates LSP
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  setWidth(width) {
    this.width = width;
  }
  
  setHeight(height) {
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
  
  // This violates LSP - Square changes behavior of parent methods
  setWidth(width) {
    this.width = width;
    this.height = width; // Side effect not expected in Rectangle
  }
  
  setHeight(height) {
    this.width = height;
    this.height = height; // Side effect not expected in Rectangle
  }
}

// Usage that breaks with Square
function testRectangle(rect) {
  rect.setWidth(5);
  rect.setHeight(4);
  return rect.getArea(); // Expected: 20, but Square returns 16
}

console.log("=== BAD EXAMPLE (LSP Violation) ===");
const rect = new Rectangle(2, 3);
const square = new Square(2);

console.log("Rectangle area:", testRectangle(rect)); // 20 ✓
console.log("Square area:", testRectangle(square));   // 16 ✗ (Expected 20)