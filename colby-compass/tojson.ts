import * as XLSX from 'xlsx';
import * as fs from 'fs';

function excelToJson(filePath: string): any[] {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Assuming the data is in the first sheet
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert worksheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    return jsonData;
}

function saveToJsonFile(data: any[], filePath: string): void {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Usage
const excelFilePath = 'ColbyEventsData.xlsx'; // Change this to your Excel file path
const jsonData = excelToJson(excelFilePath);
const jsonFilePath = 'output.json'; // Change this to the desired output JSON file path
saveToJsonFile(jsonData, jsonFilePath);
console.log('Conversion complete. JSON file saved successfully.');