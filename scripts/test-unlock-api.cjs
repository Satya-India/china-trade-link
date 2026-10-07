const assert = require('assert');

// Verify that search-index.json has zero raw phones
const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../public/search-index.json');
const indexContent = fs.readFileSync(indexPath, 'utf-8');

const raw11Regex = /"p":"(1[3-9]\d{9})"/g;
const matches = indexContent.match(raw11Regex);
if (matches && matches.length > 0) {
  console.error(`FAIL: Found ${matches.length} unmasked phones in search-index.json!`, matches.slice(0, 5));
  process.exit(1);
} else {
  console.log(`PASS: Zero unmasked 11-digit mobile numbers in search-index.json.`);
}

// Verify masked phone format
const maskedRegex = /"p":"\+86-[0-9]{3}-\*\*\*-([0-9]{4})"/g;
const maskedMatches = indexContent.match(maskedRegex);
console.log(`PASS: Found ${maskedMatches ? maskedMatches.length : 0} properly masked phones in search-index.json.`);

assert(maskedMatches && maskedMatches.length > 25000, 'Expected >25,000 masked phones');

console.log('ALL LOCAL DATA INTEGRITY CHECKS PASSED!');
