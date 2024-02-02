const FyersAPI = require("fyers-api-v3").fyersModel


var fyers = new FyersAPI({path:"/path/to/where/logs/to/be/saved"})
// set appID
fyers.setAppId("6BQQUK21RL-100")

// set redirectURL
fyers.setRedirectUrl("https://127.0.0.1:3000/")

// set accessToken
fyers.setAccessToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDY4NjQ4NDMsImV4cCI6MTcwNjkyMDIyMywibmJmIjoxNzA2ODY0ODQzLCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHZMRExVTkNqd0RWaFZLT01hb0ZWYnlsRkhPTkRWLS1keW9fMm9xU3daLUhDeE9PRmdEaklabElBUGFzQVd6R3RUY0NqNWxkSlNocG1NTlptQVgzVHBBR3RscWxaZmZJNjhQWllNcVg4eDhqVlpMTT0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6bnVsbCwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.UjjRczJ4mgLogW6EBbZiG88a9CzVbTg-3HLwUNraZZs")

fyers.get_funds().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})