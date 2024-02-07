const DataSocket = require("fyers-api-v3").fyersDataSocket

// Replace the sample access token with your actual access token
// access_token format will be "APPID:access_token"
// For example : access_token = "7N***X38S-100:eyJ0eXA****************PSv0bLiHOqW5SI"
const accesstoken = "6BQQUK21RL-100:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDcyODYzODksImV4cCI6MTcwNzM1MjIwOSwibmJmIjoxNzA3Mjg2Mzg5LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHd4OTFMX1R4SXhCVENsQVktcWVYSWdtTGlXYzFQd19Vc1lmYk0yX2ZJOGQzM3RaZURJc2toYUFfaW5ZWlotVENFMHM2ZEZsdHMySEJkN0phSGY2VUJsNFZfZHFiWk5Ja2hMZFZHUENUdzA3emd3UT0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6ImVjNzUwNjdiMmQzYjZiMjQ5N2YwZDRjNGNhMmQ1ZWUyZmI3OGZiYTAzZGE3ZmUwOWNiNjA4MTkwIiwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.xw44waEXP-Y7hKeK9kkn8r1t9Y6IxL280fScXMpuniI"

var skt= DataSocket.getInstance(accesstoken,"path/where/logs/to/be/saved")

skt.on("connect",function(){
skt.subscribe(['NSE:IDEA-EQ',"NSE:SBIN-EQ"])
skt.mode(skt.LiteMode)
// incase of going back to full mode use
 //skt.mode(skt.FullMode)

console.log(skt.isConnected())
})

skt.on("message",function(message){
	console.log({"TEST":message})
})

skt.on("error",function(message){
	console.log("erroris",message)
})

skt.on("close",function(){
    console.log("socket closed")
})
skt.connect()
skt.autoreconnect()