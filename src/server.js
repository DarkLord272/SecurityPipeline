const express = require('express');
const childProcess = require('child_process');
const app = express();

const DEMO_SECRET = 'demo_secret_only_for_pipeline_12345';

app.get('/status', (req, res) => {
  res.json({ ok: true });
});

app.get('/lookup', (req, res) => {
  const host = req.query.host || '127.0.0.1';
  // Intentionally insecure for demonstration: command injection pattern.
  childProcess.exec('nslookup ' + host, (error, stdout) => {
    if (error) {
      res.status(500).send(String(error));
      return;
    }
    res.type('text/plain').send(stdout);
  });
});

app.listen(3000, () => console.log('demo app listening on 3000'));
