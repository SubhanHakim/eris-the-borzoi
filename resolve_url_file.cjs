
const https = require('https');
const fs = require('fs');

const url = 'https://vt.tiktok.com/ZSaYYyKmQ/';

https.get(url, (res) => {
  const loc = res.headers.location;
  fs.writeFileSync('tiktok_url.txt', loc);
}).on('error', (e) => {
  console.error(e);
});
