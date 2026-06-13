const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Microservice is running!', status: 'healthy' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.get('/api/info', (req, res) => {
  res.json({
    service: 'fintech-microservice',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;