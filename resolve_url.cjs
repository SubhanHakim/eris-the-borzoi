
const https = require('https');

const url = 'https://vt.tiktok.com/ZSaYYyKmQ/';

https.get(url, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers.location);
}).on('error', (e) => {
  console.error(e);
});
