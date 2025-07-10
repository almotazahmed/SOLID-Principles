// ✅ GOOD: Follows OCP - can extend without modifying existing code
class Shape {
  calculateArea() {
    throw new Error('calculateArea method must be implemented');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// New shape can be added without modifying AreaCalculator
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  
  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

class AreaCalculator {
  calculateArea(shapes) {
    return shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
  }
}


// Create different shapes
const rectangle = new Rectangle(5, 3);
const circle = new Circle(4);
const triangle = new Triangle(6, 4);

// Calculate individual areas
console.log('Rectangle area:', rectangle.calculateArea()); // 15
console.log('Circle area:', circle.calculateArea().toFixed(2)); // 50.27
console.log('Triangle area:', triangle.calculateArea()); // 12

// Calculate total area of multiple shapes
const shapes = [rectangle, circle, triangle];
const calculator = new AreaCalculator();
console.log('Total area:', calculator.calculateArea(shapes).toFixed(2)); // 77.27

// Adding new shape without modifying existing code
class Pentagon extends Shape {
  constructor(side, apothem) {
    super();
    this.side = side;
    this.apothem = apothem;
  }
  
  calculateArea() {
    return (5 * this.side * this.apothem) / 2;
  }
}

const pentagon = new Pentagon(6, 4.13);
const allShapes = [...shapes, pentagon];
console.log('Total area with pentagon:', calculator.calculateArea(allShapes).toFixed(2));
