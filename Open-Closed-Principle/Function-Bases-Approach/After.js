// ✅ GOOD: Follows OCP using functions
const discountStrategies = {
  regular: (price) => price,
  premium: (price) => price * 0.9,
  vip: (price) => price * 0.8,
  // New discount strategy can be added without modifying existing code
  student: (price) => price * 0.85
};

const calculateDiscount = (price, customerType) => {
  const strategy = discountStrategies[customerType];
  if (!strategy) {
    throw new Error(`Unknown customer type: ${customerType}`);
  }
  return strategy(price);
};

// Test existing discount strategies
console.log('Price calculations:');
console.log('Regular customer ($100):', calculateDiscount(100, 'regular'));
console.log('Premium customer ($100):', calculateDiscount(100, 'premium'));
console.log('VIP customer ($100):', calculateDiscount(100, 'vip'));
console.log('Student customer ($100):', calculateDiscount(100, 'student'));

// Add new discount strategy without modifying existing code
discountStrategies.employee = (price) => price * 0.5; // 50% employee discount
discountStrategies.senior = (price) => price * 0.85; // 15% senior discount

console.log('Employee discount ($100):', calculateDiscount(100, 'employee'));
console.log('Senior discount ($100):', calculateDiscount(100, 'senior'));

// Usage in shopping cart context
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  addItem(item) {
    this.items.push(item);
  }
  
  calculateTotal(customerType = 'regular') {
    const subtotal = this.items.reduce((sum, item) => sum + item.price, 0);
    const totalWithDiscount = calculateDiscount(subtotal, customerType);
    const discount = subtotal - totalWithDiscount;
    
    return {
      subtotal: subtotal,
      discount: discount,
      total: totalWithDiscount
    };
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: 'Laptop', price: 999 });
cart.addItem({ name: 'Mouse', price: 29 });
cart.addItem({ name: 'Keyboard', price: 79 });

console.log('\nShopping cart totals:');
console.log('Regular customer:', cart.calculateTotal('regular'));
console.log('VIP customer:', cart.calculateTotal('vip'));
console.log('Employee:', cart.calculateTotal('employee'));

// Error handling example
try {
  console.log('Unknown customer type:', calculateDiscount(100, 'unknown'));
} catch (error) {
  console.log('Error:', error.message);
}