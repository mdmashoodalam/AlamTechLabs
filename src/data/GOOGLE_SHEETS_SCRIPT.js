/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT FOR ALAM TECHLABS LEAD INGESTION
 * ==============================================================================
 * Instructions to connect your Google Sheet in 60 seconds:
 * 
 * 1. Open Google Sheets (https://sheets.new) and name it "Alam TechLabs Inquiries".
 * 2. In row 1, set up these column headers:
 *    A1: Timestamp | B1: Name | C1: Phone | D1: Email | E1: Package | F1: Budget | G1: Message
 * 3. In the top menu, click Extensions > Apps Script.
 * 4. Delete any code in the editor and paste this entire code below.
 * 5. Click "Deploy" > "New deployment".
 * 6. Select type: "Web app".
 * 7. Set:
 *    - Description: "Alam TechLabs Lead Ingestion"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (crucial so your website form can post to it!)
 * 8. Click "Deploy", copy the generated "Web App URL" (starts with https://script.google.com/macros/s/...).
 * 9. Paste this URL into `src/data/agencyData.js` under `leadConfig.googleSheetWebhookUrl`!
 * ==============================================================================
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    var timestamp = data.formattedDate || new Date().toLocaleString();
    var name = data.name || "";
    var phone = data.phone || "";
    var email = data.email || "";
    var service = data.service || "";
    var budget = data.budget || "";
    var message = data.message || "";

    // Append as a new row in Google Sheet
    sheet.appendRow([timestamp, name, phone, email, service, budget, message]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Lead recorded successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", error: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
