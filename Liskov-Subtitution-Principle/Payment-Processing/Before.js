// BAD EXAMPLE - Violates LSP
class PaymentProcessor {
  processPayment(amount) {
    return `Processing payment of $${amount}`;
  }
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount) {
    if (amount > 10000) {
      throw new Error("Credit card limit exceeded"); // Unexpected behavior
    }
    return super.processPayment(amount);
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount) {
    if (amount < 1) {
      throw new Error("PayPal requires minimum $1"); // Different preconditions
    }
    return super.processPayment(amount);
  }
}

// This function expects consistent behavior
function processTransaction(processor, amount) {
  return processor.processPayment(amount);
}

console.log("\n=== PAYMENT EXAMPLE (LSP Violation) ===");
const creditCard = new CreditCardProcessor();
const paypal = new PayPalProcessor();

// These will behave differently with same inputs
try {
  console.log(processTransaction(creditCard, 15000)); // May throw
} catch (e) {
  console.log("Credit card error:", e.message);
}

try {
  console.log(processTransaction(paypal, 0.5)); // May throw
} catch (e) {
  console.log("PayPal error:", e.message);
}