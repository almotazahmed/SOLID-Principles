// FOLLOWING SRP - Each class has single responsibility
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {
    console.log(`Saving ${user.name} to database`);
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    console.log(`Sending welcome email to ${user.email}`);
  }
}

class UserValidator {
  validateEmail(email) {
    return email.includes('@');
  }
}

class UserFormatter {
  formatForDisplay(user) {
    return `${user.name} (${user.email})`;
  }
}

// Usage example
const user = new User("John Doe", "john@example.com");
const userRepo = new UserRepository();
const emailService = new EmailService();
const validator = new UserValidator();
const formatter = new UserFormatter();

userRepo.save(user);
emailService.sendWelcomeEmail(user);
console.log("Email valid:", validator.validateEmail(user.email));
console.log("Display format:", formatter.formatForDisplay(user));
