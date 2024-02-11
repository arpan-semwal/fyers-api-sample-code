// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const WebSocket = require('ws'); // Import the WebSocket library


// const app = express();
// app.use(cors());
// const PORT = process.env.PORT || 3003;

// const server = app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
// });

// // Create a WebSocket server attached to your Express server
// const wss = new WebSocket.Server({ noServer: true });

// wss.on('connection', (ws) => {
//     // Handle incoming WebSocket connections
//     ws.on('message', (message) => {
//         // Handle messages from the frontend if needed
//     });
// });

// // Attach the WebSocket server to the existing Express server
// server.on('upgrade', (request, socket, head) => {
//     wss.handleUpgrade(request, socket, head, (ws) => {
//         wss.emit('connection', ws, request);
//     });
// });



// const FyersSocket = require("fyers-api-v3").fyersDataSocket;

// var fyersdata = new FyersSocket("6BQQUK21RL-100:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDc1NDk2MTksImV4cCI6MTcwNzYxMTQxOSwibmJmIjoxNzA3NTQ5NjE5LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHh5T3pfeHhTZGhnWHVPNzNoQmV2d08xS2szLVBpazdBQU5uWWRpY2dGSVlFZGtTNWFvV0xZYUp1NlRlN1psbHpWRldITjUyRzBzS04ycmFjRkFodGc5QlBMZjZqX2prUG1WcHduY1didTczMjdrWT0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6ImVjNzUwNjdiMmQzYjZiMjQ5N2YwZDRjNGNhMmQ1ZWUyZmI3OGZiYTAzZGE3ZmUwOWNiNjA4MTkwIiwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.hUe92QD4eHUNpouEzbFM9s0pmkzAnTifYSZGL8e3jQw");

// function onmsg(message) {
//     // Send the received message to all connected clients
//     wss.clients.forEach((client) => {
//         if (client.readyState === WebSocket.OPEN) {
//             client.send(JSON.stringify(message));
//         }
//     });
// }

// function onconnect() {
//     fyersdata.subscribe([ 'NSE:SBIN-EQ','NSE:IDEA-EQ' ]);
//     fyersdata.autoreconnect();
     
// }

// function onerror(err) {
//     console.log(err);
// }

// function onclose() {
//     console.log("socket closed");
// }

// fyersdata.on("message", onmsg);
// fyersdata.on("connect", onconnect);
// fyersdata.on("error", onerror);
// fyersdata.on("close", onclose);

// fyersdata.connect();
// //NSE:BANKNIFTY2420746000PE ,

const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3003;

const server = app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Handle messages from the frontend if needed
    });
});

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

function getRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

const minPrice = 100;
const maxPrice = 200;

setInterval(() => {
    const randomPrice = getRandomPrice(minPrice, maxPrice);
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(randomPrice);
        }
    });
}, 1000); // Change the value (in milliseconds) to adjust how frequently the price updates
