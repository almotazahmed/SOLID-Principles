// VIOLATING SRP - Multiple responsibilities in one class
class UserBad {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  // Multiple responsibilities mixed together
  saveToDatabase() {
    // Database logic
    console.log(`Saving ${this.name} to database`);
  }
  
  sendWelcomeEmail() {
    // Email logic
    console.log(`Sending welcome email to ${this.email}`);
  }
  
  validateEmail() {
    // Validation logic
    return this.email.includes('@');
  }
  
  formatForDisplay() {
    // Display logic
    return `${this.name} (${this.email})`;
  }
}