import { agencyInfo } from '../data/agencyData';

/**
 * Lead Management Service
 * Handles:
 * 1. Email delivery to Gmail (via Web3Forms / Formspree)
 * 2. Instant WhatsApp message dispatch
 * 3. Google Sheets automatic row logging
 * 4. Local storage backup (Zero-lost-leads guarantee)
 */

export async function submitLead(formData) {
  const results = {
    email: false,
    googleSheet: false,
    whatsappUrl: '',
    localSaved: false,
    errors: []
  };

  const payload = {
    ...formData,
    timestamp: new Date().toISOString(),
    formattedDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    source: window.location.href,
  };

  // 1. Local Storage Backup (Ensures you NEVER lose a lead even if offline or service is down)
  try {
    const existing = JSON.parse(localStorage.getItem('alam_leads') || '[]');
    existing.unshift(payload);
    localStorage.setItem('alam_leads', JSON.stringify(existing.slice(0, 50)));
    results.localSaved = true;
  } catch (err) {
    console.warn('Local storage lead save error:', err);
  }

  // 2. Email Delivery (Option 1: Web3Forms / Formspree to mashoodalam05@gmail.com)
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
          to_email: agencyInfo.founder.email,
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
    } else {
      // If no key set yet, we trigger mailto fallback or simulated success with notice
      results.emailNotice = "Add Web3Forms key to activate instant Gmail delivery";
    }
  } catch (err) {
    console.error('Email dispatch error:', err);
    results.errors.push('Email delivery failed');
  }

  // 3. Google Sheets Dispatch (Option 3: Webhook to Google Sheet)
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
    } else {
      results.sheetNotice = "Google Sheet Webhook URL not configured yet";
    }
  } catch (err) {
    console.error('Google Sheet dispatch error:', err);
    results.errors.push('Google Sheet logging failed');
  }

  // 4. WhatsApp Message Formulation (Option 2)
  const whatsappText = encodeURIComponent(
    `*NEW WEBSITE INQUIRY - ALAM TECHLABS*\n\n` +
    `👤 *Name / Business:* ${formData.name}\n` +
    `📞 *Phone / WhatsApp:* ${formData.phone}\n` +
    `📧 *Email:* ${formData.email || 'Not provided'}\n` +
    `📦 *Package / Service:* ${formData.service}\n` +
    `💰 *Budget Expectation:* ${formData.budget}\n\n` +
    `📝 *Project Details / Requirements:*\n${formData.message || 'Please contact for project discussion.'}\n\n` +
    `📅 *Submitted on:* ${payload.formattedDate}`
  );

  results.whatsappUrl = `https://wa.me/${agencyInfo.founder.whatsapp}?text=${whatsappText}`;

  return results;
}
