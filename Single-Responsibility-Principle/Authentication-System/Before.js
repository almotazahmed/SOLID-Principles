// VIOLATING SRP - Multiple responsibilities in one class
class AuthServiceBad {
  login(username, password) {
    // Validation
    if (!username || !password) {
      throw new Error('Username and password required');
    }
    
    // Database query
    const user = this.findUserInDatabase(username);
    
    // Password hashing
    const hashedPassword = this.hashPassword(password);
    
    // Authentication
    if (user && user.password === hashedPassword) {
      // Session management
      this.createSession(user);
      
      // Logging
      this.logLogin(username);
      
      // Email notification
      this.sendLoginNotification(user.email);
      
      return user;
    }
    
    throw new Error('Invalid credentials');
  }
  
  findUserInDatabase(username) { 
    console.log(`Finding user: ${username}`);
    return { id: 1, username, password: 'hashedpass', email: 'user@example.com' };
  }
  
  hashPassword(password) { 
    console.log('Hashing password');
    return 'hashedpass';
  }
  
  createSession(user) { 
    console.log(`Creating session for user: ${user.username}`);
    return 'session-token';
  }
  
  logLogin(username) { 
    console.log(`User ${username} logged in at ${new Date()}`);
  }
  
  sendLoginNotification(email) { 
    console.log(`Sending login notification to ${email}`);
  }
}