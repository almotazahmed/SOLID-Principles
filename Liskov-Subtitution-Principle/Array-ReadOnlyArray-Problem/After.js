// GOOD EXAMPLE - Follows LSP
class Collection {
  get(index) {
    throw new Error("Must implement get");
  }
  
  size() {
    throw new Error("Must implement size");
  }
}

class GoodMutableArray extends Collection {
  constructor() {
    super();
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

class GoodReadOnlyArray extends Collection {
  constructor(items = []) {
    super();
    this.items = [...items]; // Copy to prevent external modification
  }
  
  get(index) {
    return this.items[index];
  }
  
  size() {
    return this.items.length;
  }
}

function printCollection(collection) {
  console.log(`Collection size: ${collection.size()}`);
  for (let i = 0; i < collection.size(); i++) {
    console.log(`  Item ${i+1}: ${collection.get(i)}`);
  }
}

console.log("\n=== GOOD ARRAY EXAMPLE (LSP Compliant) ===");
const goodMutableArr = new GoodMutableArray();
goodMutableArr.add("A");
goodMutableArr.add("B");

const goodReadOnlyArr = new GoodReadOnlyArray(["X", "Y", "Z"]);

printCollection(goodMutableArr);  // Works
printCollection(goodReadOnlyArr); // Works consistently