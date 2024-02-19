const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const config = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299',
        'Cookie': 'session_id=abc123; user_id=456'
    }
};

app.use(cors());

app.get('/gainers', async(req, res) => {
    try {
        const response = await axios.get('https://www.nseindia.com/api/live-analysis-variations?index=gainers', config);
        const NIFTY = response.data.NIFTY.data;
        NIFTY.sort((a, b) => a.perChange > b.perChange);
        res.json(NIFTY);
    } catch (error) {
        console.error('Error fetching gainers data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});