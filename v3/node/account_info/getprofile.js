const FyersAPI = require("fyers-api-v3").fyersModel;
const express = require('express');
const axios = require('axios');
const cors = require('cors'); 

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

var fyers = new FyersAPI({ path: "/path/to/where/logs/to/be/saved" });
fyers.setAppId("6BQQUK21RL-100");
fyers.setAccessToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDY5NDExNDYsImV4cCI6MTcwNzAwNjYwNiwibmJmIjoxNzA2OTQxMTQ2LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHZkcmFXdUYwck1jRmQxVG45TlJ3NDZtSnF2WkJ3d3VpZzhyMDZ4TTRUQ2hEZ3FUVWJ1UVh0SnVDNmk3R1ZNRThjd21NcXBHNlZaM0c5YlhPLVdLeWJKa1ZRUlljYS1OLVk5ZDdWbjhySWJSTnpiWT0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6ImVjNzUwNjdiMmQzYjZiMjQ5N2YwZDRjNGNhMmQ1ZWUyZmI3OGZiYTAzZGE3ZmUwOWNiNjA4MTkwIiwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.53-irCJI6K3F1JMbiOAlLsmIYOHV2w9Ar3Sq9mkqZk0");

app.get('/getProfile', async (req, res) => {
    try {
        const response = await fyers.get_profile();
        res.json(response);
    } catch (error) {
        console.error("Error fetching data", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
