// FOLLOWING SRP - Each class has single responsibility
class InputValidator {
  validateLoginInput(username, password) {
    if (!username || !password) {
      throw new Error('Username and password required');
    }
  }
}

class UserRepository {
  findByUsername(username) {
    // Database query logic
    console.log(`Finding user: ${username}`);
    return { id: 1, username, password: 'hashedpass', email: 'user@example.com' };
  }
}

class PasswordHasher {
  hash(password) {
    // Hashing logic
    console.log('Hashing password');
    return 'hashedpass';
  }
}

class SessionManager {
  create(user) {
    // Session creation logic
    console.log(`Creating session for user: ${user.username}`);
    return 'session-token';
  }
}

class AuthLogger {
  logLogin(username) {
    console.log(`User ${username} logged in at ${new Date()}`);
  }
}

class LoginNotificationService {
  send(email) {
    console.log(`Sending login notification to ${email}`);
  }
}

class AuthService {
  constructor() {
    this.validator = new InputValidator();
    this.userRepo = new UserRepository();
    this.hasher = new PasswordHasher();
    this.sessionManager = new SessionManager();
    this.logger = new AuthLogger();
    this.notificationService = new LoginNotificationService();
  }
  
  login(username, password) {
    this.validator.validateLoginInput(username, password);
    
    const user = this.userRepo.findByUsername(username);
    const hashedPassword = this.hasher.hash(password);
    
    if (user && user.password === hashedPassword) {
      this.sessionManager.create(user);
      this.logger.logLogin(username);
      this.notificationService.send(user.email);
      return user;
    }
    
    throw new Error('Invalid credentials');
  }
}

// Usage example
const authService = new AuthService();
try {
  const loggedInUser = authService.login('johndoe', 'password123');
  console.log(`Successfully logged in: ${loggedInUser.username}`);
} catch (error) {
  console.error(`Login failed: ${error.message}`);
}