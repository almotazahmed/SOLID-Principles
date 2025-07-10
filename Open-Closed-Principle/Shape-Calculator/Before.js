// ❌ BAD: Violates OCP - need to modify AreaCalculator for new shapes
class BadAreaCalculator {
  calculateArea(shapes) {
    let totalArea = 0;
    for (const shape of shapes) {
      if (shape.type === 'rectangle') {
        totalArea += shape.width * shape.height;
      } else if (shape.type === 'circle') {
        totalArea += Math.PI * shape.radius * shape.radius;
      }
      // Adding triangle requires modifying this class
    }
    return totalArea;
  }
}