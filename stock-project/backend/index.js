const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 3002;
app.use(cors()); 
const stockData = {
  AAPL: { price: 150.25 },
  GOOGL: { price: 2800.00 },
  TSLA: { price: 700.50 },
  AMZN: { price: 3500.75 },
};

app.get('/api/stock/:symbol', (req, res) => {
  const symbol = req.params.symbol;
  const data = stockData[symbol] || { price: 'N/A' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
