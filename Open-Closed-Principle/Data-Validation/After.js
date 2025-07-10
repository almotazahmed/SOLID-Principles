// ✅ GOOD: Follows OCP
class ValidationRule {
  validate(data) {
    throw new Error('validate method must be implemented');
  }
}

class EmailValidationRule extends ValidationRule {
  validate(data) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data);
  }
}

class PhoneValidationRule extends ValidationRule {
  validate(data) {
    return /^\d{10}$/.test(data);
  }
}

// New validation rule - no modification needed to Validator
class PasswordValidationRule extends ValidationRule {
  validate(data) {
    return data.length >= 8 && /[A-Z]/.test(data) && /[0-9]/.test(data);
  }
}

class Validator {
  constructor() {
    this.rules = new Map();
  }
  
  addRule(name, rule) {
    this.rules.set(name, rule);
  }
  
  validate(data, ruleName) {
    const rule = this.rules.get(ruleName);
    if (!rule) {
      throw new Error(`Validation rule '${ruleName}' not found`);
    }
    return rule.validate(data);
  }
}

// Create validator and add rules
const validator = new Validator();
validator.addRule('email', new EmailValidationRule());
validator.addRule('phone', new PhoneValidationRule());
validator.addRule('password', new PasswordValidationRule());

// Test different validations
console.log('Email validation:');
console.log('  test@example.com:', validator.validate('test@example.com', 'email'));
console.log('  invalid-email:', validator.validate('invalid-email', 'email'));

console.log('Phone validation:');
console.log('  1234567890:', validator.validate('1234567890', 'phone'));
console.log('  123-456-7890:', validator.validate('123-456-7890', 'phone'));

console.log('Password validation:');
console.log('  SecurePass123:', validator.validate('SecurePass123', 'password'));
console.log('  weak:', validator.validate('weak', 'password'));

// Add new validation rule without modifying validator
class CreditCardValidationRule extends ValidationRule {
  validate(data) {
    // Simple credit card validation (Luhn algorithm simplified)
    return /^\d{16}$/.test(data);
  }
}

validator.addRule('creditcard', new CreditCardValidationRule());
console.log('Credit card validation:');
console.log('  1234567890123456:', validator.validate('1234567890123456', 'creditcard'));

// Usage in form validation
class FormValidator {
  constructor(validator) {
    this.validator = validator;
  }
  
  validateForm(formData) {
    const errors = [];
    
    if (!this.validator.validate(formData.email, 'email')) {
      errors.push('Invalid email format');
    }
    
    if (!this.validator.validate(formData.phone, 'phone')) {
      errors.push('Invalid phone number');
    }
    
    if (!this.validator.validate(formData.password, 'password')) {
      errors.push('Password must be at least 8 characters with uppercase and number');
    }
    
    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }
}

const formValidator = new FormValidator(validator);
const formData = {
  email: 'user@example.com',
  phone: '1234567890',
  password: 'MyPassword123'
};

const validationResult = formValidator.validateForm(formData);
console.log('Form validation result:', validationResult);
