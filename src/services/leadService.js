import { agencyInfo } from '../data/agencyData';

/**
 * Lead Management Service
 * 1. Saves submission into Google Sheets via Webhook
 * 2. Delivers notification email to info@alamtechlabs.online
 * 3. Keeps offline backup in localStorage so zero leads are ever lost
 * 4. Separate WhatsApp URL formulation (does NOT auto-trigger on submit)
 */

export async function submitLead(formData) {
  const results = {
    email: false,
    googleSheet: false,
    localSaved: false,
    errors: []
  };

  const payload = {
    name: formData.name || "",
    phone: formData.phone || "",
    email: formData.email || "",
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

  // 2. Google Sheets Webhook Dispatch
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

  // 3. Email Delivery to info@alamtechlabs.online
  try {
    const accessKey = agencyInfo.leadConfig?.web3FormsAccessKey;
    if (accessKey) {
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Agency Inquiry from ${formData.name} - ${formData.service}`,
          from_name: "Alam TechLabs Website",
          to_email: agencyInfo.leadConfig.emailRecipient,
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          timestamp: payload.formattedDate
        })
      });

      if (emailResponse.ok) {
        results.email = true;
      }
    }
  } catch (err) {
    console.error('Email dispatch error:', err);
    results.errors.push('Email delivery failed');
  }

  return results;
}
