import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import './App.css';

const App = () => {
  const [stockData, setStockData] = useState({});
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [lastTradedPrice, setLastTradedPrice] = useState(null);
  const [purchasedPrice, setPurchasedPrice] = useState(null);
  const [profitOrLoss, setProfitOrLoss] = useState(null);
  const [color, setColor] = useState('black');
  const [percentage, setPercentage] = useState(null);
  const [isSold, setIsSold] = useState(false); // New state for tracking if the stock is sold

  useEffect(() => {
    const client = new W3CWebSocket('ws://localhost:3003');

    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (message) => {
      const receivedData = JSON.parse(message.data);
      console.log('Received data from backend:', receivedData);

      setStockData((prevData) => ({
        ...prevData,
        [receivedData.symbol]: receivedData,
      }));

      // Calculate profit or loss when new data is received
      if (!isSold && purchasedPrice !== null && selectedSymbol === receivedData.symbol) {
        const currentPrice = receivedData.ltp;
        const profitLoss = (currentPrice - purchasedPrice) * 1; // Assuming 1 quantity for simplicity
        setProfitOrLoss(profitLoss);

        // Calculate percentage change
        const changePercentage = ((currentPrice - purchasedPrice) / purchasedPrice) * 100;
        setPercentage(changePercentage);

        // Update lastTradedPrice with the new calculated price only if stock is not sold
        const updatedPrice = (currentPrice + profitLoss).toFixed(2); // Limit decimal points to 2
        setLastTradedPrice(updatedPrice);
        // Update color based on profit or loss
        setColor(profitLoss >= 0 ? 'green' : 'red');
      }
    };

    client.onclose = () => {
      console.log('WebSocket Client Closed');
    };

    return () => {
      client.close();
    };
  }, [purchasedPrice, selectedSymbol, isSold]); // Trigger effect when purchasedPrice, selectedSymbol, or isSold changes

  const handleClick = () => {
    if (selectedSymbol && stockData[selectedSymbol]) {
      const ltp = stockData[selectedSymbol].ltp;
      setLastTradedPrice(ltp.toFixed(2)); // Limit decimal points to 2
      setPurchasedPrice(ltp); // Update purchased price with current LTP
      setProfitOrLoss(0); // Reset profit/loss
      setPercentage(0); // Reset percentage change
      setColor('black'); // Set color to black when buying
      setIsSold(false); // Reset sold status
    }
  };

  const handleSellClick = () => {
    setIsSold(true); // Set sold status to true when sell button is clicked
  };

  const handleSymbolChange = (symbol) => {
    setSelectedSymbol(symbol);
    setLastTradedPrice(null);
    setProfitOrLoss(null); // Reset profit/loss when symbol changes
    setPurchasedPrice(null);
    setPercentage(null); // Reset percentage change
    setColor('black'); // Reset color to black when symbol changes
    setIsSold(false); // Reset sold status
  };

  return (
    <div>
      <div>
        <select value={selectedSymbol} onChange={(e) => handleSymbolChange(e.target.value)}>
          <option value="">Select Symbol</option>
          {Object.keys(stockData).map((symbol) => (
            <option key={symbol} value={symbol}>
              {symbol}
            </option>
          ))}
        </select>
        <button className='btn1' onClick={handleClick}>Buy</button>
        <button className='btn2' onClick={handleSellClick}>Sell</button> {/* Add Sell button */}
      </div>

      {lastTradedPrice !== null && (
        <div>
          <p>Profit/Loss: <span style={{ color: color }}>{profitOrLoss >= 0 ? `+${percentage.toFixed(2)}%` : `${percentage.toFixed(2)}%`}</span></p>
          <p>Purchased Price: {purchasedPrice.toFixed(2)}</p>
          <h3>Last Traded Price: <span style={{ color: color }}>{profitOrLoss >= 0 ? `+${lastTradedPrice}` : lastTradedPrice}</span></h3>
        </div>
      )}

      {Object.keys(stockData).map((symbol) => (
        <div key={symbol}>
          <h2>{symbol} Data</h2>
          {stockData[symbol] ? (
            <pre>{JSON.stringify(stockData[symbol], null, 2)}</pre>
          ) : (
            <p>Loading {symbol} data...</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
