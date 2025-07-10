// FOLLOWING SRP - Each class has single responsibility
class FileReader {
  read(filename) {
    // Only responsible for reading files
    console.log(`Reading file: ${filename}`);
    return "file content";
  }
}

class ContentParser {
  parse(content) {
    // Only responsible for parsing content
    console.log("Parsing content");
    return { parsed: true };
  }
}

class DataValidator {
  validate(data) {
    // Only responsible for validation
    console.log("Validating data");
    return true;
  }
}

class Logger {
  log(message) {
    // Only responsible for logging
    console.log(`Log: ${message}`);
  }
}

class DataStorage {
  save(data) {
    // Only responsible for saving data
    console.log("Saving processed data");
  }
}

// Coordinator class
class FileProcessor {
  constructor() {
    this.fileReader = new FileReader();
    this.parser = new ContentParser();
    this.validator = new DataValidator();
    this.logger = new Logger();
    this.storage = new DataStorage();
  }
  
  processFile(filename) {
    const content = this.fileReader.read(filename);
    const data = this.parser.parse(content);
    const isValid = this.validator.validate(data);
    this.logger.log(`File ${filename} processed. Valid: ${isValid}`);
    this.storage.save(data);
  }
}

// Usage example
const processor = new FileProcessor();
processor.processFile("example.txt");