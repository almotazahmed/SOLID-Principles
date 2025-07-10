
// ❌ BAD: Violates OCP
class BadLogger {
  log(message, type) {
    if (type === 'file') {
      console.log(`Writing to file: ${message}`);
    } else if (type === 'database') {
      console.log(`Writing to database: ${message}`);
    } else if (type === 'email') {
      console.log(`Sending email: ${message}`);
    }
    // Adding new log destination requires modifying this class
  }
}