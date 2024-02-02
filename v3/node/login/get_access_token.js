const FyersAPI = require("fyers-api-v3").fyersModel
const open = require('opn');

var fyers = new FyersAPI({path:"/path/to/where/logs/to/be/saved"})
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
const auth_code="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJpYXQiOjE3MDY4NjQ3OTgsImV4cCI6MTcwNjg5NDc5OCwibmJmIjoxNzA2ODY0MTk4LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImF1dGhfY29kZSIsImRpc3BsYXlfbmFtZSI6IllKMDA4NTciLCJvbXMiOiJLMSIsImhzbV9rZXkiOm51bGwsIm5vbmNlIjoiIiwiYXBwX2lkIjoiNkJRUVVLMjFSTCIsInV1aWQiOiI3Yjg3OWNhNzI0NTM0MzIyOWM5ZmQzNDFjZTQ5NDVkNiIsImlwQWRkciI6IjI0MDU6MjAxOjY4MTI6MjAyZDo0YWY6Yjk1ZDpmNDZkOmI3MDAsIDE3Mi42OS4yMDMuMTMyIiwic2NvcGUiOiIifQ.zxdczUCc6rozF5JvIGDuMP3tgdQrsp7bUMNUdtcUgBw"
// Replace with your secret key provided by Fyers
const secretKey = "0OITL01M6R";

fyers.generate_access_token({ "secret_key": secretKey, "auth_code": auth_code }).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})