const FyersAPI = require("fyers-api-v3").fyersModel
const open = require('opn');

var fyers = new FyersAPI({ path: "/path/to/where/logs/to/be/saved" })
    // set appID
fyers.setAppId("6BQQUK21RL-100");

// set redirectURL
fyers.setRedirectUrl("https://127.0.0.1:3000/")

var generateAuthcodeURL = fyers.generateAuthCode();

// Open the URL in the default web browser to allow the user to grant access
open(generateAuthcodeURL)
    .then(() => {
        console.log(`Opened ${generateAuthcodeURL} in your default web browser.`);
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });


// Define the authorization code and secret key required for generating access token
const auth_code = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJpYXQiOjE3MDg1NzcwOTgsImV4cCI6MTcwODYwNzA5OCwibmJmIjoxNzA4NTc2NDk4LCJhdWQiOiJbXCJ4OjBcIiwgXCJ4OjFcIiwgXCJ4OjJcIiwgXCJkOjFcIiwgXCJkOjJcIiwgXCJ4OjFcIiwgXCJ4OjBcIl0iLCJzdWIiOiJhdXRoX2NvZGUiLCJkaXNwbGF5X25hbWUiOiJZSjAwODU3Iiwib21zIjoiSzEiLCJoc21fa2V5IjoiZWM3NTA2N2IyZDNiNmIyNDk3ZjBkNGM0Y2EyZDVlZTJmYjc4ZmJhMDNkYTdmZTA5Y2I2MDgxOTAiLCJub25jZSI6IiIsImFwcF9pZCI6IjZCUVFVSzIxUkwiLCJ1dWlkIjoiYmU4OGY5N2ViNTE3NGU3YjkzMDMwM2RhZTlkYmM1YzEiLCJpcEFkZHIiOiIwLjAuMC4wIiwic2NvcGUiOiIifQ.ozWO6zbgNVAXvIDhZslinR9jOb8KyWiub1BwVUBWdrc"
    // Replace with your secret key provided by Fyers
const secretKey = "0OITL01M6R";

fyers.generate_access_token({ "secret_key": secretKey, "auth_code": auth_code }).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})