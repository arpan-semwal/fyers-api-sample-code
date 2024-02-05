const express = require('express');
const axios = require('axios');
const cors = require('cors');
const WebSocket = require('ws'); // Import the WebSocket library


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3003;

const server = app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

// Create a WebSocket server attached to your Express server
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    // Handle incoming WebSocket connections
    ws.on('message', (message) => {
        // Handle messages from the frontend if needed
    });
});

// Attach the WebSocket server to the existing Express server
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});



const FyersSocket = require("fyers-api-v3").fyersDataSocket;

var fyersdata = new FyersSocket("6BQQUK21RL-100:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDcxMTMxNzQsImV4cCI6MTcwNzE3OTQxNCwibmJmIjoxNzA3MTEzMTc0LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHdIcld4ZTl4bnJsOGVIUnZsSDRDS1ZMMmUweVNvWjdXQkl5bU1oWnVyeDNSWXZ2NXc5dTkxSy1xT29la2xDclNWcHRoTDdSTGc4MVNaSTBHZzhaRmtIUzJHcU54M2NUdFJfMkpIRG5ZOFJvTVBkbz0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6ImVjNzUwNjdiMmQzYjZiMjQ5N2YwZDRjNGNhMmQ1ZWUyZmI3OGZiYTAzZGE3ZmUwOWNiNjA4MTkwIiwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.VpVvHe1F25pDrllADIh_Bm5jVLLHDDPPUzoNXTLUb1g");

function onmsg(message) {
    // Send the received message to all connected clients
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}

function onconnect() {
    fyersdata.subscribe(['NSE:TCS-EQ', 'NSE:INFY-EQ', 'NSE:RELIANCE-EQ', 'NSE:HDFC-EQ']);
    fyersdata.autoreconnect();
     
}

function onerror(err) {
    console.log(err);
}

function onclose() {
    console.log("socket closed");
}

fyersdata.on("message", onmsg);
fyersdata.on("connect", onconnect);
fyersdata.on("error", onerror);
fyersdata.on("close", onclose);

fyersdata.connect();
