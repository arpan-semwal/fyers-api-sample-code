const FyersSocket = require("fyers-api-v3").fyersDataSocket

var fyersdata= new FyersSocket(
    "6BQQUK21RL-100:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDY5NDExNDYsImV4cCI6MTcwNzAwNjYwNiwibmJmIjoxNzA2OTQxMTQ2LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHZkcmFXdUYwck1jRmQxVG45TlJ3NDZtSnF2WkJ3d3VpZzhyMDZ4TTRUQ2hEZ3FUVWJ1UVh0SnVDNmk3R1ZNRThjd21NcXBHNlZaM0c5YlhPLVdLeWJKa1ZRUlljYS1OLVk5ZDdWbjhySWJSTnpiWT0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6ImVjNzUwNjdiMmQzYjZiMjQ5N2YwZDRjNGNhMmQ1ZWUyZmI3OGZiYTAzZGE3ZmUwOWNiNjA4MTkwIiwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.53-irCJI6K3F1JMbiOAlLsmIYOHV2w9Ar3Sq9mkqZk0")

function onmsg(message){
    console.log(message)
}

function onconnect(){
    fyersdata.subscribe(['NSE:TCS-EQ']) //not subscribing for market depth data
    // fyersdata.mode(fyersdata.LiteMode) //set data mode to lite mode
    // fyersdata.mode(fyersdata.FullMode) //set data mode to full mode is on full mode by default
    fyersdata.autoreconnect() //enable auto reconnection mechanism in case of disconnection
}

function onerror(err){
    console.log(err)
}

function onclose(){
    console.log("socket closed")
}

fyersdata.on("message",onmsg)
fyersdata.on("connect",onconnect)
fyersdata.on("error",onerror)
fyersdata.on("close",onclose)

fyersdata.connect()