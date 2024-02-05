const express = require("express");
const app = express();
const PORT = 6969;

// Importing the exported objects from the livedata module
const { fyersdata} = require("../livedata/livedata");
 

// Your server routes and configurations go here

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Connect to fyersdata when the server starts
fyersdata.connect();