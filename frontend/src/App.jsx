// import { useState, useEffect } from 'react';
// import { w3cwebsocket as W3CWebSocket } from 'websocket';
// import './App.css';

// const App = () => {
//   const [stockData, setStockData] = useState({});
//   const [selectedSymbol, setSelectedSymbol] = useState('');
//   const [lastTradedPrice, setLastTradedPrice] = useState(null);
//   const [sellQuantity , setSellQuantity] = useState(1);
//   const [profitOrLoss , setProfitOrLoss] = useState(null);
//   const [sellingPrice , setSellingPrice] = useState(null);

//   useEffect(() => {
//     const client = new W3CWebSocket('ws://localhost:3003');

//     client.onopen = () => {
//       console.log('WebSocket Client Connected');
//     };

//     client.onmessage = (message) => {
//       const receivedData = JSON.parse(message.data);
//       console.log('Received data from backend:', receivedData);

//       setStockData((prevData) => ({
//         ...prevData,
//         [receivedData.symbol]: receivedData,
//       }));
//     };

//     client.onclose = () => {
//       console.log('WebSocket Client Closed');
//     };

//     return () => {
//       client.close();
//     };
//   }, []);

//   const handleClick = () => {
//     if (selectedSymbol && stockData[selectedSymbol]) {
//       const ltp = stockData[selectedSymbol].ltp;
//       setLastTradedPrice(ltp);
//     }
//   };

//   const handleSymbolChange = (symbol) => {
//     setSelectedSymbol(symbol);
//     setLastTradedPrice(null);
//     setProfitOrLoss(null); // Reset last traded price when symbol changes
//     setSellingPrice(null);
//   };


//   const profitloss = () => {
//     if(selectedSymbol && stockData[selectedSymbol] && sellQuantity > 0 ){
//       const ltp = stockData[selectedSymbol].ltp;
//       const buyingPrice = lastTradedPrice;
//       const sellingPrice = ltp*sellQuantity;
//       const profit = sellingPrice - (buyingPrice * sellQuantity);
//       setProfitOrLoss(profit);
//       setSellingPrice(sellingPrice);
//     }
//   }

//   return (
//     <div>
//       <div>
//         <select value={selectedSymbol} onChange={(e) => handleSymbolChange(e.target.value)}>
//           <option value="">Select Symbol</option>
//           {Object.keys(stockData).map((symbol) => (
//             <option key={symbol} value={symbol}>
//               {symbol}
//             </option>
//           ))}
//         </select>
//         <button className='btn1' onClick={handleClick}>Buy</button>
//         <button className='btn2'  onClick={profitloss}>Sell</button>
//       </div>

//       {lastTradedPrice !== null && (
//         <div>
//           <h3>Last Traded Price: {lastTradedPrice}</h3>
           
//         </div>
//       )}

//       {profitOrLoss !== null && (
//         <div>

//           <h3>Profit/loss : {profitOrLoss > 0 ? "Profit" : "Loss"}</h3>
//           <p>Selling Price : {sellingPrice}</p>
//           <p>Amount: {Math.abs(profitOrLoss)}</p>
//         </div>
//       )}

//       {Object.keys(stockData).map((symbol) => (
//         <div key={symbol}>
//           <h2>{symbol} Data</h2>
//           {stockData[symbol] ? (
//             <pre>{JSON.stringify(stockData[symbol], null, 2)}</pre>
//           ) : (
//             <p>Loading {symbol} data...</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';

const App = () => {
    const [liveData, setLiveData] = useState(Math.random() * 100);
    const [purchasedPrice, setPurchasedPrice] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update live data with a new random number
            const newLiveData = Math.random() * 100;
            setLiveData(newLiveData);
        }, 2000); // Update every 2 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        // Update the purchased price with the current live data when "Buy" button is clicked
        
            setPurchasedPrice(liveData);
        
    };

    const calculateProfitLoss = () => {
        if (purchasedPrice !== null) {
            const change = liveData - purchasedPrice;
            return change;
        }
        return null;
    };

    return (
        <div>
            <h1>Live Data: {liveData.toFixed(2)}</h1>
            <div>
                <button onClick={handleClick}>Buy</button>
                {purchasedPrice !== null && (
                    <h2>
                        Purchased Price: ${purchasedPrice.toFixed(2)} 
                        {purchasedPrice !== null && calculateProfitLoss() !== null && (
                            <span>{calculateProfitLoss() >= 0 ? ` (Profit: +${calculateProfitLoss().toFixed(2)})` : ` (Loss: ${calculateProfitLoss().toFixed(2)})`}</span>
                        )}
                    </h2>
                )}
            </div>
        </div>
    );
};

export default App;












