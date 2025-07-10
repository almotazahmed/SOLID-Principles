// ❌ BAD: Violates OCP
class BadValidator {
  validate(data, type) {
    if (type === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data);
    } else if (type === 'phone') {
      return /^\d{10}$/.test(data);
    } else if (type === 'zipcode') {
      return /^\d{5}$/.test(data);
    }
    // Adding new validation requires modifying this class
  }
}