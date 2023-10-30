import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [selectedStock, setSelectedStock] = useState('AAPL'); 
  const [stockData, setStockData] = useState({
    AAPL: { price: 150.25 },
    GOOGL: { price: 2800.00 },
    TSLA: { price: 700.50 },
    AMZN: { price: 3500.75 },
  });

  const stockOptions = ['AAPL', 'GOOGL', 'TSLA', 'AMZN'];

  const fetchData = async () => {
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [selectedStock]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Stock Price Tracker</h1>
          <select value={selectedStock} onChange={(e) => setSelectedStock(e.target.value)}>
            {stockOptions.map((stock) => (
              <option key={stock} value={stock}>
                {stock}
              </option>
            ))}
          </select>
          <div>
            <h2>Selected Stock: {selectedStock}</h2>
            <p>Current Price: {stockData[selectedStock]?.price || 'Loading...'}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
