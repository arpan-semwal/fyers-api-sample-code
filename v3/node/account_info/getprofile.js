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
fyers.setAccessToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDcxOTk0NDcsImV4cCI6MTcwNzI2NTgwNywibmJmIjoxNzA3MTk5NDQ3LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHdjdlhGN3ZzWXRtMTd4aEVtd3dTWnh5aEpLWEREUEhfc041a2drTnEtZGdFZlpRMURsREJicjNVWnVwTVVXR01xLUJyMnc3cDE2QWY5a0dqSkVlWWdPYm9CNElDUGtuX0hsV2ZMOUMweE0xSExDZz0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6ImVjNzUwNjdiMmQzYjZiMjQ5N2YwZDRjNGNhMmQ1ZWUyZmI3OGZiYTAzZGE3ZmUwOWNiNjA4MTkwIiwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.fZHj2wSgkhuqdICR8XJLwWn-ngw539Un0A4mocfyx6M");

app.get('/getProfile', async (req, res) => {
    try {
        const response = await fyers.get_profile();
        res.json(response);
    } catch (error) {
        console.error("Error fetching data", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
