const FyersAPI = require("fyers-api-v3").fyersModel


var fyers = new FyersAPI({path:"/path/to/where/logs/to/be/saved"})
// set appID
fyers.setAppId("6BQQUK21RL-100")

// set redirectURL
fyers.setRedirectUrl("https://127.0.0.1:3000/")

// set accessToken
fyers.setAccessToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDc4MDA4MDcsImV4cCI6MTcwNzg3MDY0NywibmJmIjoxNzA3ODAwODA3LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHl2am5ONjVQeC1ucGhTTVJDWWF1TnhXcGlCT3cyd0NndkFUWEpXbUs3UlpzTF9zZWMzVnJacDQ2ckV0Q1RxdkI4ZEtpQkl3blRJZUo2ZVhEdmIxN084UldTRnMxV25jNkN0dmNVUFpYNGVJUFlIST0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6ImVjNzUwNjdiMmQzYjZiMjQ5N2YwZDRjNGNhMmQ1ZWUyZmI3OGZiYTAzZGE3ZmUwOWNiNjA4MTkwIiwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.BhnReHCdTcltPPt5F-t9a4N505KW0qlRl26fGssaBHY");


var inp={
    "symbol":"NSE:SBIN-EQ",
    "resolution":"D",
    "date_format":"0",
    "range_from":"1612497600",
    "range_to":"1612497685",
    "cont_flag":"1"
}

fyers.getHistory(inp).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})