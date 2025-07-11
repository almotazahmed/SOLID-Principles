// BAD EXAMPLE - Violates LSP
class MutableArray {
  constructor() {
    this.items = [];
  }
  
  add(item) {
    this.items.push(item);
  }
  
  get(index) {
    return this.items[index];
  }
  
  size() {
    return this.items.length;
  }
}

class ReadOnlyArray extends MutableArray {
  add(item) {
    throw new Error("Cannot modify read-only array"); // Violates LSP
  }
}

function addItemsToArray(arr, items) {
  items.forEach(item => arr.add(item));
  return arr.size();
}

console.log("\n=== ARRAY EXAMPLE (LSP Violation) ===");
const mutableArr = new MutableArray();
const readOnlyArr = new ReadOnlyArray();

console.log("Mutable array size:", addItemsToArray(mutableArr, [1, 2, 3])); // 3

try {
  console.log("ReadOnly array size:", addItemsToArray(readOnlyArr, [1, 2, 3])); // Throws
} catch (e) {
  console.log("ReadOnly array error:", e.message);
}