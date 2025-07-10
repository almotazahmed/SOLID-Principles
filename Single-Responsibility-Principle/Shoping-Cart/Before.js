// VIOLATING SRP - Multiple responsibilities in one class
class ShoppingCartBad {
  constructor() {
    this.items = [];
  }
  
  addItem(item) {
    this.items.push(item);
  }
  
  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
  }
  
  // Should not be cart's responsibility
  calculateTax(total) {
    return total * 0.08;
  }
  
  // Should not be cart's responsibility
  applyDiscount(total, discountCode) {
    const discounts = { 'SAVE10': 0.1, 'SAVE20': 0.2 };
    return total * (1 - (discounts[discountCode] || 0));
  }
  
  // Should not be cart's responsibility
  processPayment(amount, paymentMethod) {
    console.log(`Processing ${amount} payment via ${paymentMethod}`);
  }
  
  // Should not be cart's responsibility
  sendConfirmationEmail(userEmail) {
    console.log(`Sending confirmation to ${userEmail}`);
  }
}