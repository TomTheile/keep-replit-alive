const https = require('https');
const URL = 'https://8f850254-657a-4e88-9c29-b6d340493e45-00-2plxlavwwp9tc.riker.replit.dev';

https.get(URL, (res) => {
  console.log(`[Ping] ${URL} - Status: ${res.statusCode}`);
}).on('error', (err) => {
  console.error('[Ping Error]', err);
});
