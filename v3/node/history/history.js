const FyersAPI = require("fyers-api-v3").fyersModel

var fyers = new FyersAPI()
fyers.setAppId("6BQQUK21RL-100")
fyers.setRedirectUrl("https://127.0.0.1:3000/")
fyers.setAccessToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDY5NDExNDYsImV4cCI6MTcwNzAwNjYwNiwibmJmIjoxNzA2OTQxMTQ2LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbHZkcmFXdUYwck1jRmQxVG45TlJ3NDZtSnF2WkJ3d3VpZzhyMDZ4TTRUQ2hEZ3FUVWJ1UVh0SnVDNmk3R1ZNRThjd21NcXBHNlZaM0c5YlhPLVdLeWJKa1ZRUlljYS1OLVk5ZDdWbjhySWJSTnpiWT0iLCJkaXNwbGF5X25hbWUiOiJKQVRJTiBHVVBUQSIsIm9tcyI6IksxIiwiaHNtX2tleSI6ImVjNzUwNjdiMmQzYjZiMjQ5N2YwZDRjNGNhMmQ1ZWUyZmI3OGZiYTAzZGE3ZmUwOWNiNjA4MTkwIiwiZnlfaWQiOiJZSjAwODU3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.53-irCJI6K3F1JMbiOAlLsmIYOHV2w9Ar3Sq9mkqZk0")

var inp={
    "symbol":"NSE:SBIN-EQ",
    "resolution":"D",
    "date_format":"0",
    "range_from":"1690895316",
    "range_to":"1691068173",
    "cont_flag":"1"
}
fyers.getHistory(inp).then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})

 
