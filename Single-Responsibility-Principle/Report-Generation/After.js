// FOLLOWING SRP - Each class has single responsibility
class DataFetcher {
  fetch(source) {
    console.log(`Fetching data from ${source}`);
    return { data: 'sample data' };
  }
}

class DataProcessor {
  process(data) {
    console.log('Processing data');
    return { processed: true, ...data };
  }
}

class PDFFormatter {
  format(data) {
    console.log('Formatting as PDF');
    return `PDF: ${JSON.stringify(data)}`;
  }
}

class ExcelFormatter {
  format(data) {
    console.log('Formatting as Excel');
    return `Excel: ${JSON.stringify(data)}`;
  }
}

class HTMLFormatter {
  format(data) {
    console.log('Formatting as HTML');
    return `<html><body>${JSON.stringify(data)}</body></html>`;
  }
}

class FileStorage {
  save(content, filename) {
    console.log(`Saving file: ${filename}`);
  }
}

class EmailService {
  send(content, recipients) {
    console.log(`Emailing report to ${recipients.join(', ')}`);
  }
}

class ReportGenerator {
  constructor() {
    this.dataFetcher = new DataFetcher();
    this.dataProcessor = new DataProcessor();
    this.fileStorage = new FileStorage();
    this.emailService = new EmailService();
    
    this.formatters = {
      pdf: new PDFFormatter(),
      excel: new ExcelFormatter(),
      html: new HTMLFormatter()
    };
  }
  
  generateReport(type, options) {
    const rawData = this.dataFetcher.fetch(options.source);
    const processedData = this.dataProcessor.process(rawData);
    
    const formatter = this.formatters[type] || this.formatters.html;
    const formattedReport = formatter.format(processedData);
    
    this.fileStorage.save(formattedReport, `report.${type}`);
    
    if (options.recipients) {
      this.emailService.send(formattedReport, options.recipients);
    }
    
    return formattedReport;
  }
}

// Usage example
const reportGenerator = new ReportGenerator();
const report = reportGenerator.generateReport('pdf', {
  source: 'database',
  recipients: ['manager@company.com', 'team@company.com']
});

console.log('Generated report:', report);