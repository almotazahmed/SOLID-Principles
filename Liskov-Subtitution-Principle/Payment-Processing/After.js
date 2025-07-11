// GOOD EXAMPLE - Follows LSP
class PaymentService {
  processPayment(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    return this.doProcessPayment(amount);
  }
  
  doProcessPayment(amount) {
    throw new Error("Must implement doProcessPayment");
  }
}

class GoodCreditCardService extends PaymentService {
  doProcessPayment(amount) {
    // Handle business logic internally, don't change interface contract
    const fee = amount > 10000 ? amount * 0.03 : 0;
    return `Credit card payment of $${amount} (fee: $${fee})`;
  }
}

class GoodPayPalService extends PaymentService {
  doProcessPayment(amount) {
    // Consistent behavior with parent class
    const fee = amount * 0.025;
    return `PayPal payment of $${amount} (fee: $${fee})`;
  }
}

function processGoodTransaction(service, amount) {
  return service.processPayment(amount);
}

console.log("\n=== GOOD PAYMENT EXAMPLE (LSP Compliant) ===");
const goodCreditCard = new GoodCreditCardService();
const goodPayPal = new GoodPayPalService();

console.log(processGoodTransaction(goodCreditCard, 15000)); // Works consistently
console.log(processGoodTransaction(goodPayPal, 0.5));       // Works consistently