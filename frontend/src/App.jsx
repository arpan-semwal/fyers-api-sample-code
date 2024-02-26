import   { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import './App.css';

const App = () => {
  const [stockData, setStockData] = useState({});
 

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
// import   { useState, useEffect } from 'react';

// function App() {
//   const [gainers, setGainers] = useState([]);

//   useEffect(() => {
//     const fetchGainersData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/gainers');
//         const data = await response.json();
//         setGainers(data);
//       } catch (error) {
//         console.error('Error fetching gainers data:', error);
//       }
//     };

//     fetchGainersData();
//   }, []);

//   return (
//     <div>
//       <h1>NSE Gainers</h1>
//       <ul>
//         {gainers.map(gainer => (
//           <li key={gainer.symbol}>
//             {gainer.symbol}
//             <br/>
//             {gainer.open_price}
//             <br/>
//             {gainer.high_price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
