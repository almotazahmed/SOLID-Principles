// ✅ GOOD: Follows OCP
class PaymentMethod {
  process(amount) {
    throw new Error('process method must be implemented');
  }
}

class CreditCardPayment extends PaymentMethod {
  process(amount) {
    console.log(`Processing $${amount} via credit card`);
    // Credit card specific logic
  }
}

class PayPalPayment extends PaymentMethod {
  process(amount) {
    console.log(`Processing $${amount} via PayPal`);
    // PayPal specific logic
  }
}

// New payment method - no modification needed to PaymentProcessor
class CryptoPayment extends PaymentMethod {
  process(amount) {
    console.log(`Processing $${amount} via cryptocurrency`);
    // Crypto specific logic
  }
}

class PaymentProcessor {
  processPayment(amount, paymentMethod) {
    paymentMethod.process(amount);
  }
}


// Create payment processor
const processor = new PaymentProcessor();

// Process different payment types
const creditCard = new CreditCardPayment();
const paypal = new PayPalPayment();
const crypto = new CryptoPayment();

processor.processPayment(100, creditCard);
processor.processPayment(200, paypal);
processor.processPayment(50, crypto);

// Adding new payment method without modifying processor
class ApplePayPayment extends PaymentMethod {
  process(amount) {
    console.log(`Processing ${amount} via Apple Pay`);
    // Apple Pay specific logic
  }
}

const applePay = new ApplePayPayment();
processor.processPayment(75, applePay);

// Usage in real application context
class OrderService {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  
  processOrder(order, paymentMethod) {
    console.log(`Processing order #${order.id} for ${order.total}`);
    this.paymentProcessor.processPayment(order.total, paymentMethod);
    console.log('Order completed!');
  }
}

const orderService = new OrderService(processor);
const order = { id: 123, total: 299.99 };
orderService.processOrder(order, new CreditCardPayment());