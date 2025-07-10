// VIOLATING SRP - Multiple responsibilities in one class
class ReportGeneratorBad {
  generateReport(type, data) {
    // Data fetching
    const reportData = this.fetchData(data.source);
    
    // Data processing
    const processedData = this.processData(reportData);
    
    // Report formatting
    let formattedReport;
    if (type === 'pdf') {
      formattedReport = this.formatAsPDF(processedData);
    } else if (type === 'excel') {
      formattedReport = this.formatAsExcel(processedData);
    } else {
      formattedReport = this.formatAsHTML(processedData);
    }
    
    // File saving
    this.saveToFile(formattedReport, type);
    
    // Email sending
    this.emailReport(formattedReport, data.recipients);
    
    return formattedReport;
  }
  
  fetchData(source) { 
    console.log(`Fetching data from ${source}`);
    return { data: 'sample data' };
  }
  
  processData(data) { 
    console.log('Processing data');
    return { processed: true, ...data };
  }
  
  formatAsPDF(data) { 
    console.log('Formatting as PDF');
    return `PDF: ${JSON.stringify(data)}`;
  }
  
  formatAsExcel(data) { 
    console.log('Formatting as Excel');
    return `Excel: ${JSON.stringify(data)}`;
  }
  
  formatAsHTML(data) { 
    console.log('Formatting as HTML');
    return `<html><body>${JSON.stringify(data)}</body></html>`;
  }
  
  saveToFile(content, type) { 
    console.log(`Saving file: report.${type}`);
  }
  
  emailReport(content, recipients) { 
    console.log(`Emailing report to ${recipients.join(', ')}`);
  }
}