/**
 * Zero-dependency lazy-loaded Sino Trade Link Customer Assistant Panel.
 * Uses only pure DOM manipulation (no React bundle overhead), calls signed /api/chat proxy,
 * renders supplier directory cards cleanly with listed vs. verified labels, and preserves
 * normal site navigation + inquiry handoffs.
 */

interface SupplierCard {
  id?: string;
  name: string;
  boothLocation?: string;
  listingBadge?: string;
  matchQuality?: string;
  alternativeLabel?: string;
  description?: string | null;
  url?: string;
}

const WELCOME: Record<string, string> = {
  en: 'Hello! Ask me to search 27,706+ listed Yiwu & China suppliers, filter direct factories, explain OEM/ODM, samples, booth verification, or structure your sourcing brief.',
  es: '¡Hola! Puedo buscar entre 27,706 proveedores en Yiwu y China, orientar sobre OEM/ODM, muestras y verificación de puestos, o preparar su solicitud.',
  pt: 'Olá! Posso pesquisar entre 27.706 fornecedores em Yiwu e China, apoiar OEM/ODM, amostras e verificação, ou montar seu resumo.',
  fr: 'Bonjour ! Je peux rechercher parmi 27 706 fournisseurs à Yiwu et en Chine, vous guider pour l’OEM/ODM, les échantillons et préparer votre brief.',
  de: 'Hallo! Ich suche für Sie in 27.706 gelisteten Anbietern in Yiwu & China, berate zu OEM/Muster/Standprüfung und erstelle Ihren Anfrageentwurf.',
  ar: 'مرحباً! يمكنني البحث في دليل يضم 27,706 مورداً في إيوو والصين، وتوضيح التصنيع المخصص والعينات وفحص المواقع وتنظيم طلب التوريد.',
  ru: 'Здравствуйте! Помогу найти поставщиков среди 27 706 профилей Иу и фабрик Китая, подсказать по OEM, образцам и подготовить запрос.',
  it: 'Ciao! Posso cercare tra 27.706 fornitori a Yiwu e in Cina, supportare OEM/ODM, campioni e verifica stand o preparare la tua bozza.',
};

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className = '',
  text?: string
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function mountSinoChatPanel(
  root: HTMLElement,
  opts: { locale?: string; onMinimize?: () => void; onReopenReady?: (fn: () => void) => void }
) {
  let lang = opts.locale || 'en';
  let loading = false;
  let draft: Record<string, string> = {};
  let items: Array<{ product: string; quantity?: string }> = [];
  let remainingMessages = 5;
  let limitReached = false;
  try {
    const saved = JSON.parse(localStorage.getItem('stl_chat_state_v1') || '{}');
    if (!saved.exp || Date.now() < saved.exp) {
      if (typeof saved.remainingMessages === 'number') remainingMessages = saved.remainingMessages;
      if (typeof saved.limitReached === 'boolean') limitReached = saved.limitReached;
    }
  } catch {}

  const aside = el(
    'aside',
    'fixed bottom-4 left-3 right-3 sm:left-6 sm:right-auto sm:w-[25.5rem] z-[70] rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden font-sans text-slate-900'
  );
  aside.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  aside.setAttribute('aria-label', 'Sino Trade Link Sourcing Assistant');

  // Header
  const header = el('div', 'bg-[#0f172a] text-white px-4 py-3 flex items-center justify-between border-b-2 border-sky-400');
  const titleWrap = el('div');
  titleWrap.append(
    el('div', 'font-bold text-sm', 'Sino Trade Link Sourcing Desk'),
    el('div', 'text-[11px] text-sky-300', '27,706+ Listed Suppliers · China Sourcing')
  );
  const closeBtn = el('button', 'text-xs px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 cursor-pointer', '✕');
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Minimize sourcing assistant');
  closeBtn.onclick = () => {
    aside.hidden = true;
    opts.onMinimize?.();
  };
  opts.onReopenReady?.(() => {
    aside.hidden = false;
  });
  const counterBadge = el('span', 'text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-slate-200', `${remainingMessages}/5`);
  const headerRight = el('div', 'flex items-center gap-2');
  headerRight.append(counterBadge, closeBtn);
  header.append(titleWrap, headerRight);

  // Human channels + Directory bar
  const bar = el('div', 'px-3 py-2 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-1.5 text-[11px]');
  const dirLocPrefix = lang && lang !== 'en' && lang !== 'zh' ? `/${lang}` : '';
  const mkLink = (label: string, href: string, cls: string, ext = false, trackChan = '') => {
    const a = el('a', cls, label);
    a.href = href;
    if (ext) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    if (trackChan) {
      a.onclick = () => {
        fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'handover-click', locale: lang, channel: trackChan }),
          keepalive: true,
        }).catch(() => {});
      };
    }
    return a;
  };
  bar.append(
    mkLink('Directory', `${dirLocPrefix}/directory`, 'px-2 py-1 rounded-full bg-white border border-slate-200 font-semibold text-slate-800'),
    mkLink('Market Map', '/market-map', 'px-2 py-1 rounded-full bg-white border border-slate-200 font-semibold text-slate-700'),
    mkLink('OEM & Freight Guide', '/sourcing-guide', 'px-2 py-1 rounded-full bg-white border border-slate-200 font-semibold text-slate-700'),
    mkLink('WhatsApp +86', 'https://wa.me/8613482725985', 'px-2 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-semibold text-emerald-800', true, 'whatsapp'),
    mkLink('Email Desk', 'mailto:support@sinotradelink.com', 'px-2 py-1 rounded-full bg-white border border-slate-200 font-semibold text-slate-700', false, 'email')
  );

  // Stream
  const stream = el('div', 'h-72 overflow-y-auto p-3 space-y-2.5 text-sm bg-slate-50/70');
  const draftSummary = el('div', 'hidden px-3 py-1.5 bg-sky-50 border-t border-sky-200 text-[11px] text-slate-700 flex items-center justify-between gap-2');
  const draftText = el('span', 'truncate font-medium');
  const downloadBtn = el('button', 'shrink-0 px-2 py-0.5 rounded bg-white border border-sky-300 font-semibold text-sky-900 hover:bg-sky-100 cursor-pointer', 'Save Brief (.txt)');
  downloadBtn.type = 'button';
  downloadBtn.onclick = () => {
    const lines = [
      'Sino Trade Link | China Sourcing Brief (Draft — Not Auto-Submitted)',
      ...items.map((it, i) => `Item ${i + 1}: ${it.product}${it.quantity ? ' · ' + it.quantity : ''}`),
      ...Object.entries(draft).map(([k, v]) => `${k}: ${v}`),
      '\nNext step: Browse sinotradelink.com/directory or message WhatsApp +86 134 8272 5985.',
    ];
    const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sino-trade-link-brief.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  draftSummary.append(draftText, downloadBtn);

  function addMessage(text: string, mine: boolean, suppliers: SupplierCard[] = []) {
    const bubble = el(
      'div',
      `p-2.5 rounded-xl max-w-[92%] ${mine ? 'ml-auto bg-[#0f172a] text-white' : 'bg-white border border-slate-200 text-slate-900 shadow-xs'}`
    );
    const body = el('div', 'whitespace-pre-wrap leading-relaxed', text);
    bubble.append(body);

    if (suppliers.length > 0) {
      const list = el('div', 'mt-2 grid grid-cols-1 gap-1.5');
      for (const sup of suppliers.slice(0, 4)) {
        const card = el(
          'a',
          'block rounded-lg border border-slate-200 bg-slate-50 p-2 text-xs hover:border-[#075E54] transition'
        );
        card.href = sup.url || '/directory';
        card.target = '_blank';
        card.rel = 'noopener noreferrer';

        const topRow = el('div', 'flex items-center justify-between gap-2');
        topRow.append(el('div', 'font-bold text-slate-900 truncate', sup.name));
        const badgeLabel =
          sup.matchQuality === 'alternative-material'
            ? 'Alternative material'
            : sup.matchQuality === 'alternative-spec'
              ? 'Spec alternative'
              : sup.matchQuality === 'related-match'
                ? 'Spec unconfirmed'
                : 'Exact match';
        const badgeCls =
          sup.matchQuality === 'alternative-material' || sup.matchQuality === 'alternative-spec'
            ? 'shrink-0 px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-[10px] font-semibold text-amber-800'
            : sup.matchQuality === 'related-match'
              ? 'shrink-0 px-1.5 py-0.5 rounded bg-slate-100 border border-slate-300 text-[10px] font-semibold text-slate-700'
              : 'shrink-0 px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[10px] font-semibold text-emerald-800';
        topRow.append(el('span', badgeCls, badgeLabel));
        card.append(topRow);

        const sub = [sup.boothLocation, sup.listingBadge].filter(Boolean).join(' · ');
        card.append(el('div', 'text-[10.5px] text-slate-600 mt-0.5', sub));
        if (sup.alternativeLabel) {
          card.append(el('div', 'text-[10px] text-amber-700 mt-0.5', sup.alternativeLabel));
        } else if (sup.description) {
          card.append(el('div', 'text-[10.5px] text-slate-500 mt-0.5 truncate', sup.description));
        }
        list.append(card);
      }
      bubble.append(list);
    }

    stream.append(bubble);
    stream.scrollTop = stream.scrollHeight;
  }

  addMessage(WELCOME[lang] || WELCOME.en, false);

  // Form
  const form = el('form', 'p-2.5 border-t border-slate-200 flex gap-2 bg-white');
  const input = el(
    'input',
    'flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#075E54]'
  );
  input.type = 'text';
  input.maxLength = 900;
  input.placeholder = 'Products, material, quantity, destination...';
  input.setAttribute('aria-label', 'Message Sino Trade Link assistant');
  const sendBtn = el(
    'button',
    'rounded-lg bg-[#075E54] px-3.5 py-2 text-sm font-semibold text-white hover:bg-[#05473f] disabled:opacity-50 cursor-pointer',
    'Send'
  );
  sendBtn.type = 'submit';
  input.disabled = limitReached;
  sendBtn.disabled = limitReached;
  form.append(input, sendBtn);

  function syncSessionUi(rem: number, reached: boolean) {
    remainingMessages = reached ? 0 : rem;
    limitReached = reached;
    counterBadge.textContent = `${remainingMessages}/5`;
    input.disabled = reached;
    sendBtn.disabled = loading || reached;
    try { localStorage.setItem('stl_chat_state_v1', JSON.stringify({ remainingMessages, limitReached, exp: Date.now() + 12 * 3600 * 1000 })); } catch {}
  }

  if (typeof BroadcastChannel !== 'undefined') {
    const ch = new BroadcastChannel('stl_chat_sync');
    ch.onmessage = (ev) => {
      if (typeof ev.data?.remainingMessages === 'number') {
        syncSessionUi(ev.data.remainingMessages, Boolean(ev.data.limitReached));
      }
    };
  }

  form.onsubmit = async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text || loading || limitReached) return;
    input.value = '';
    addMessage(text, true);
    loading = true;
    sendBtn.disabled = true;
    const statusPill = el('div', 'text-xs text-slate-500 px-1', 'Searching 27,706+ listed suppliers…');
    stream.append(statusPill);
    stream.scrollTop = stream.scrollHeight;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locale: lang,
          message: text,
          draft,
          items,
        }),
      });
      const data = (await res.json()) as any;
      const nextRem = typeof data.remainingMessages === 'number' ? data.remainingMessages : Math.max(0, remainingMessages - 1);
      const reached = Boolean(data.sessionLimitReached || data.limitReached || res.status === 429);
      syncSessionUi(nextRem, reached);
      if (typeof BroadcastChannel !== 'undefined') {
        const ch = new BroadcastChannel('stl_chat_sync');
        ch.postMessage({ remainingMessages: reached ? 0 : nextRem, limitReached: reached });
        ch.close();
      }
      if (data.language) {
        lang = data.language;
        aside.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      }
      if (data.fields && typeof data.fields === 'object') {
        draft = { ...draft, ...data.fields };
      }
      if (Array.isArray(data.items) && data.items.length) {
        items = [...items, ...data.items].slice(0, 10);
      }
      const draftParts = [
        items.length ? `${items.length} item(s)` : draft.product,
        draft.quantity,
        draft.destination,
      ].filter(Boolean);
      if (draftParts.length) {
        draftText.textContent = `Draft: ${draftParts.join(' · ')}`;
        draftSummary.classList.remove('hidden');
      }

      statusPill.remove();
      addMessage(
        data.replyText || data.adaptiveFollow || data.error || 'Share product specs, quantity, and destination.',
        false,
        Array.isArray(data.catalogResult?.inCatalogMatches) ? data.catalogResult.inCatalogMatches : []
      );
    } catch {
      statusPill.remove();
      addMessage('Assistant is temporarily unavailable. Browse /directory or message WhatsApp +86 134 8272 5985 above.', false);
    } finally {
      loading = false;
      sendBtn.disabled = limitReached;
    }
  };

  aside.append(header, bar, stream, draftSummary, form);
  root.replaceChildren(aside);
}
