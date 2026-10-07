const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../public/search-index.json');
console.log('Reading search index from:', indexPath);

const rawData = fs.readFileSync(indexPath, 'utf-8');
const items = JSON.parse(rawData);
console.log(`Loaded ${items.length} items from search index.`);

let maskedCount = 0;
let emptyCount = 0;

const sanitized = items.map(item => {
  const p = item.p ? String(item.p).trim() : '';
  const digits = p.replace(/\D/g, '');
  let masked = '';

  if (digits.length >= 11) {
    // 11-digit mobile: e.g. 18657969119 -> +86-186-***-9119
    masked = `+86-${digits.slice(0, 3)}-***-${digits.slice(-4)}`;
    maskedCount++;
  } else if (digits.length >= 7) {
    // Landline or local number
    masked = `+86-***-***-${digits.slice(-4)}`;
    maskedCount++;
  } else {
    emptyCount++;
  }

  return {
    ...item,
    p: masked
  };
});

fs.writeFileSync(indexPath, JSON.stringify(sanitized));
console.log(`Successfully sanitized search-index.json!`);
console.log(`Masked phones: ${maskedCount}, Empty/no-phone: ${emptyCount}`);
console.log(`Sample item 0:`, sanitized[0]);
