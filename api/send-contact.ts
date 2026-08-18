type SendContactBody = {
  name?: string;
  email?: string;
  category?: string;
  subject?: string;
  message?: string;
};

type ApiRequest = {
  method?: string;
  body?: SendContactBody;
};

type ApiResponse = {
  status: (code: number) => { json: (payload: unknown) => void };
};

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, category, subject, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Email service is not configured' });
    return;
  }

  const to = process.env.CONTACT_TO_EMAIL || 'nayeembiswas2@gmail.com';
  const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Category: ${category || 'General Inquiry'}`,
    `Subject: ${subject || '(no subject)'}`,
    '',
    message,
  ].join('\n');

  const html = [
    '<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #e1e3e4;border-radius:12px">',
    '<h2 style="margin:0 0 16px;color:#191c1d">New Contact Form Message</h2>',
    `<p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>`,
    `<p style="margin:0 0 8px"><strong>Category:</strong> ${escapeHtml(category || 'General Inquiry')}</p>`,
    `<p style="margin:0 0 8px"><strong>Subject:</strong> ${escapeHtml(subject || '(no subject)')}</p>`,
    '<hr style="border:none;border-top:1px solid #e1e3e4;margin:16px 0" />',
    `<p style="margin:0;white-space:pre-wrap;color:#424754">${escapeHtml(message)}</p>`,
    '</div>',
  ].join('');

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Data Converter <${from}>`,
        to: [to],
        subject: `[${category || 'Contact'}] ${subject || 'New contact message'} — ${name}`,
        reply_to: email,
        text,
        html,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error('Resend error:', resp.status, errText);
      res.status(502).json({ error: 'Failed to send email' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Send contact error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
