// ❌ BAD: Violates OCP
class BadPaymentProcessor {
  processPayment(amount, method) {
    if (method === 'credit-card') {
      console.log(`Processing $${amount} via credit card`);
      // Credit card processing logic
    } else if (method === 'paypal') {
      console.log(`Processing $${amount} via PayPal`);
      // PayPal processing logic
    }
    // Adding new payment method requires modifying this class
  }
}