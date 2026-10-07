// Instant Alert Notification Dispatcher for SinoTradeLink Leads

export interface InquiryNotificationPayload {
  inquiryId: string;
  buyerName: string;
  buyerEmail: string;
  buyerPhone?: string;
  buyerCountry?: string;
  targetBooth?: string;
  serviceType?: string;
  message: string;
  shopId?: string;
}

export async function dispatchInquiryAlerts(payload: InquiryNotificationPayload, customEnv?: any): Promise<void> {
  let env: any = (customEnv && (customEnv.runtime?.env || customEnv)) || {};
  try {
    // @ts-ignore
    const cf = await import('cloudflare:workers');
    if (cf?.env) env = { ...cf.env, ...env };
  } catch {
    // Fallback for non-workerd environments
  }
  if (typeof process !== 'undefined' && process?.env) {
    env = { ...process.env, ...env };
  }

  const promises: Promise<any>[] = [];

  // 1. Telegram Push Notification
  const telegramBotToken = env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = env.TELEGRAM_CHAT_ID;

  if (telegramBotToken && telegramChatId) {
    promises.push(sendTelegramAlert(telegramBotToken, telegramChatId, payload));
  }

  // 2. Email Notification (via Resend)
  const resendApiKey = env.RESEND_API_KEY;
  const notificationEmail = env.NOTIFICATION_EMAIL || 'satya.africa@gmail.com';

  if (resendApiKey && notificationEmail) {
    promises.push(sendResendEmail(resendApiKey, notificationEmail, payload));
  }

  // 3. Webhook (Discord / Slack / Zapier / Make / n8n)
  const webhookUrl = env.NOTIFICATION_WEBHOOK_URL;
  if (webhookUrl) {
    promises.push(sendWebhookAlert(webhookUrl, payload));
  }

  // Execute all enabled notifications concurrently without failing customer request
  if (promises.length > 0) {
    await Promise.allSettled(promises);
  }
}

async function sendTelegramAlert(botToken: string, chatId: string, p: InquiryNotificationPayload): Promise<void> {
  try {
    const isUnlock = (p.serviceType || '').toLowerCase().includes('unlock');
    const title = isUnlock ? '🔓 <b>NEW CONTACT UNLOCK ALERT</b> 🔓' : '🚨 <b>NEW WHOLESALE RFQ RECEIVED</b> 🚨';
    const text = `${title}

👤 <b>Buyer:</b> ${escapeHtml(p.buyerName)}
📧 <b>Email:</b> ${escapeHtml(p.buyerEmail)}
${p.buyerPhone ? `📱 <b>Phone / WA:</b> ${escapeHtml(p.buyerPhone)}\n` : ''}🌍 <b>Origin:</b> ${escapeHtml(p.buyerCountry || 'Global')}
${p.targetBooth ? `🏬 <b>Target Stall:</b> Booth ${escapeHtml(p.targetBooth)}\n` : ''}💼 <b>Service:</b> ${escapeHtml(p.serviceType || 'General Sourcing')}

📝 <b>Specifications:</b>
<i>"${escapeHtml(p.message)}"</i>

🔗 <a href="https://sinotradelink.com/admin/leads">Open Leads Operations Portal</a>`;

    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[Telegram Alert Error]:', err);
    }
  } catch (err) {
    console.error('[Telegram Exception]:', err);
  }
}

async function sendResendEmail(apiKey: string, toEmail: string, p: InquiryNotificationPayload): Promise<void> {
  try {
    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; padding: 24px; border-radius: 12px;">
        <div style="border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #f59e0b; margin: 0 0 4px 0; font-size: 20px;">SinoTradeLink · New Wholesale Inquiry</h2>
          <p style="color: #94a3b8; margin: 0; font-size: 13px;">Inquiry ID: ${p.inquiryId}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 140px;">Buyer Name:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${escapeHtml(p.buyerName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Email Address:</td>
            <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(p.buyerEmail)}" style="color: #38bdf8; text-decoration: none;">${escapeHtml(p.buyerEmail)}</a></td>
          </tr>
          ${p.buyerPhone ? `
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0; color: #34d399; font-family: monospace;">${escapeHtml(p.buyerPhone)}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Country:</td>
            <td style="padding: 8px 0; color: #ffffff;">${escapeHtml(p.buyerCountry || 'Global')}</td>
          </tr>
          ${p.targetBooth ? `
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Target Stall:</td>
            <td style="padding: 8px 0; color: #fbbf24; font-weight: bold;">Booth ${escapeHtml(p.targetBooth)}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Service Requested:</td>
            <td style="padding: 8px 0; color: #ffffff;">${escapeHtml(p.serviceType || 'General Sourcing')}</td>
          </tr>
        </table>

        <div style="background: #1e293b; padding: 16px; border-radius: 8px; border: 1px solid #334155; margin-bottom: 24px;">
          <h4 style="margin: 0 0 8px 0; color: #e2e8f0; font-size: 13px; text-transform: uppercase;">Inquiry Requirements & Specs:</h4>
          <p style="margin: 0; color: #cbd5e1; line-height: 1.6; font-size: 13px; white-space: pre-wrap;">${escapeHtml(p.message)}</p>
        </div>

        <div style="text-align: center;">
          <a href="https://sinotradelink.com/admin/leads" style="display: inline-block; background: #f59e0b; color: #0f172a; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px;">
            Open Leads Admin Portal
          </a>
        </div>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'SinoTradeLink <onboarding@resend.dev>',
        to: [toEmail],
        subject: `[New Lead] ${p.buyerName} (${p.buyerCountry || 'Global'}) - ${p.targetBooth ? `Booth ${p.targetBooth}` : 'Wholesale RFQ'}`,
        html
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[Resend Email Error]:', err);
    }
  } catch (err) {
    console.error('[Resend Exception]:', err);
  }
}

async function sendWebhookAlert(url: string, p: InquiryNotificationPayload): Promise<void> {
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'new_inquiry',
        timestamp: new Date().toISOString(),
        payload: p
      })
    });
  } catch (err) {
    console.error('[Webhook Exception]:', err);
  }
}

function escapeHtml(text: string): string {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
