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
fyers.setAccessToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDcyODYzODksImV4cCI6MTcwNzM1MjIwOSwibmJmIjoxNzA3Mjg2Mzg5LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHd4OTFMX1R4SXhCVENsQVktcWVYSWdtTGlXYzFQd19Vc1lmYk0yX2ZJOGQzM3RaZURJc2toYUFfaW5ZWlotVENFMHM2ZEZsdHMySEJkN0phSGY2VUJsNFZfZHFiWk5Ja2hMZFZHUENUdzA3emd3UT0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6ImVjNzUwNjdiMmQzYjZiMjQ5N2YwZDRjNGNhMmQ1ZWUyZmI3OGZiYTAzZGE3ZmUwOWNiNjA4MTkwIiwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.xw44waEXP-Y7hKeK9kkn8r1t9Y6IxL280fScXMpuniI");

app.get('/getProfile', async (req, res) => {
    try {
        const response = await fyers.get_profile();
        res.json(response);
    } catch (error) {
        console.error("Error fetching data", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
