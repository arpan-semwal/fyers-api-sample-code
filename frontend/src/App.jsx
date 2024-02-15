import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import './App.css';

const App = () => {
  const [stockData, setStockData] = useState({});
  const selectedSymbol = 'AAPL'; // Set a specific symbol to track

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
    };

    client.onclose = () => {
      console.log('WebSocket Client Closed');
    };

    return () => {
      client.close();
    };
  }, []);

  return (
    <div>
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