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
fyers.setAccessToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDY4NjQ4NDMsImV4cCI6MTcwNjkyMDIyMywibmJmIjoxNzA2ODY0ODQzLCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHZMRExVTkNqd0RWaFZLT01hb0ZWYnlsRkhPTkRWLS1keW9fMm9xU3daLUhDeE9PRmdEaklabElBUGFzQVd6R3RUY0NqNWxkSlNocG1NTlptQVgzVHBBR3RscWxaZmZJNjhQWllNcVg4eDhqVlpMTT0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6bnVsbCwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.UjjRczJ4mgLogW6EBbZiG88a9CzVbTg-3HLwUNraZZs");

app.get('/getProfile', async (req, res) => {
    try {
        const response = await fyers.get_profile();
        res.json(response);
    } catch (error) {
        console.error("Error fetching data", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
