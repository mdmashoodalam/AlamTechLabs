import { agencyInfo } from '../data/agencyData';

/**
 * Lead Management Service
 * 1. Delivers notification email directly to info@alamtechlabs.online (via FormSubmit / Web3Forms)
 * 2. Saves submission into Google Sheets via Webhook
 * 3. Keeps offline backup in localStorage so zero leads are ever lost
 */

export async function submitLead(formData) {
  const results = {
    email: false,
    googleSheet: false,
    localSaved: false,
    errors: []
  };

  const recipientEmail = agencyInfo.leadConfig?.emailRecipient || "info@alamtechlabs.online";

  const payload = {
    name: formData.name || "",
    phone: formData.phone || "",
    email: formData.email || "Not provided",
    service: formData.service || "",
    budget: formData.budget || "",
    message: formData.message || "",
    timestamp: new Date().toISOString(),
    formattedDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    source: window.location.href,
  };

  // 1. Local Storage Backup (Ensures zero lost leads)
  try {
    const existing = JSON.parse(localStorage.getItem('alam_leads') || '[]');
    existing.unshift(payload);
    localStorage.setItem('alam_leads', JSON.stringify(existing.slice(0, 50)));
    results.localSaved = true;
  } catch (err) {
    console.warn('Local storage lead save error:', err);
  }

  // 2. Direct Email Delivery to info@alamtechlabs.online
  try {
    const accessKey = agencyInfo.leadConfig?.web3FormsAccessKey;
    
    if (accessKey) {
      // If Web3Forms access key is provided, use Web3Forms
      const web3Response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Lead: ${payload.name} - ${payload.service}`,
          from_name: "AlamTechLabs Website",
          to_email: recipientEmail,
          ...payload
        })
      });
      if (web3Response.ok) {
        results.email = true;
      }
    } else {
      // Direct FormSubmit.co service targeting info@alamtechlabs.online (Zero API key needed)
      const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          service: payload.service,
          budget: payload.budget,
          message: payload.message,
          submittedAt: payload.formattedDate,
          _subject: `New Website Inquiry: ${payload.name} (${payload.service})`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (formSubmitResponse.ok) {
        results.email = true;
      }
    }
  } catch (err) {
    console.error('Email dispatch error:', err);
    results.errors.push('Email delivery failed');
  }

  // 3. Google Sheets Webhook Dispatch
  try {
    const sheetWebhook = agencyInfo.leadConfig?.googleSheetWebhookUrl;
    if (sheetWebhook && sheetWebhook.startsWith('https://script.google.com/')) {
      await fetch(sheetWebhook, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      results.googleSheet = true;
    }
  } catch (err) {
    console.error('Google Sheet dispatch error:', err);
    results.errors.push('Google Sheet logging failed');
  }

  return results;
}
