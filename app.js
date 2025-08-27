
const express = require('express');
const app = express();
const buyers = [/* ... */];
const products = [/* ... */];
const transactions = [/* ... */];

app.get('/api/buyers', (req, res) => {
  // Implement search, filter, sort as per req.query
  res.json(buyers);
});

app.get('/api/products', (req, res) => {
  // Implement category filtering, stock status, etc.
  res.json(products);
});

app.get('/api/transactions', (req, res) => {
  // Implement search and date filtering
  res.json(transactions);
});

app.listen(3000, () => { console.log('Server running'); });
