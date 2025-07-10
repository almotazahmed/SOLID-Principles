// FOLLOWING SRP - Each class has single responsibility
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  addItem(item) {
    this.items.push(item);
  }
  
  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
  }
  
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

class TaxCalculator {
  calculate(total, taxRate = 0.08) {
    return total * taxRate;
  }
}

class DiscountService {
  apply(total, discountCode) {
    const discounts = { 'SAVE10': 0.1, 'SAVE20': 0.2 };
    return total * (1 - (discounts[discountCode] || 0));
  }
}

class PaymentProcessor {
  process(amount, paymentMethod) {
    console.log(`Processing ${amount} payment via ${paymentMethod}`);
    return { success: true, transactionId: '12345' };
  }
}

class NotificationService {
  sendConfirmationEmail(userEmail, orderDetails) {
    console.log(`Sending confirmation to ${userEmail}`);
  }
}

// Usage example
const cart = new ShoppingCart();
const taxCalc = new TaxCalculator();
const discountService = new DiscountService();
const paymentProcessor = new PaymentProcessor();
const notificationService = new NotificationService();

cart.addItem({ id: 1, name: "Laptop", price: 1000 });
cart.addItem({ id: 2, name: "Mouse", price: 50 });

const subtotal = cart.getTotal();
const discountedTotal = discountService.apply(subtotal, 'SAVE10');
const tax = taxCalc.calculate(discountedTotal);
const finalTotal = discountedTotal + tax;

console.log(`Subtotal: $${subtotal}`);
console.log(`After discount: $${discountedTotal}`);
console.log(`Tax: $${tax}`);
console.log(`Final total: $${finalTotal}`);

paymentProcessor.process(finalTotal, 'credit card');
notificationService.sendConfirmationEmail('customer@example.com', { total: finalTotal });