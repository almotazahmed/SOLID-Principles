// ✅ GOOD: Follows OCP
class LogHandler {
  handle(message) {
    throw new Error('handle method must be implemented');
  }
}

class FileLogHandler extends LogHandler {
  handle(message) {
    console.log(`[FILE] ${new Date().toISOString()}: ${message}`);
  }
}

class DatabaseLogHandler extends LogHandler {
  handle(message) {
    console.log(`[DB] ${new Date().toISOString()}: ${message}`);
  }
}

class EmailLogHandler extends LogHandler {
  handle(message) {
    console.log(`[EMAIL] ${new Date().toISOString()}: ${message}`);
  }
}

// New handler can be added without modifying Logger
class SlackLogHandler extends LogHandler {
  handle(message) {
    console.log(`[SLACK] ${new Date().toISOString()}: ${message}`);
  }
}

class Logger {
  constructor() {
    this.handlers = [];
  }
  
  addHandler(handler) {
    this.handlers.push(handler);
  }
  
  log(message) {
    this.handlers.forEach(handler => handler.handle(message));
  }
}

// Create logger and add handlers
const logger = new Logger();
logger.addHandler(new FileLogHandler());
logger.addHandler(new DatabaseLogHandler());
logger.addHandler(new EmailLogHandler());

// Log different types of messages
logger.log('Application started');
logger.log('User logged in: john@example.com');
logger.log('Error: Database connection failed');

// Add new handler without modifying logger
logger.addHandler(new SlackLogHandler());
logger.log('This message goes to all handlers including Slack');

// Usage in application context
class UserService {
  constructor(logger) {
    this.logger = logger;
  }
  
  createUser(userData) {
    try {
      // User creation logic here
      this.logger.log(`User created: ${userData.email}`);
      return { success: true, userId: Math.random().toString(36) };
    } catch (error) {
      this.logger.log(`Failed to create user: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
}

const userService = new UserService(logger);
userService.createUser({ email: 'newuser@example.com', name: 'John Doe' });
