// VIOLATING SRP - Multiple responsibilities in one class
class FileProcessorBad {
  processFile(filename) {
    // Reading file
    const content = this.readFile(filename);
    
    // Parsing content
    const data = this.parseContent(content);
    
    // Validating data
    const isValid = this.validateData(data);
    
    // Logging
    this.logResult(filename, isValid);
    
    // Saving processed data
    this.saveProcessedData(data);
  }
  
  readFile(filename) { 
    console.log(`Reading file: ${filename}`);
    return "file content";
  }
  
  parseContent(content) { 
    console.log("Parsing content");
    return { parsed: true };
  }
  
  validateData(data) { 
    console.log("Validating data");
    return true;
  }
  
  logResult(filename, result) { 
    console.log(`Log: File ${filename} processed. Valid: ${result}`);
  }
  
  saveProcessedData(data) { 
    console.log("Saving processed data");
  }
}
