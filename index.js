require("newrelic");

require("newrelic");

const express = require('express')
const bollyRouter = require('./route/Bollywood')
const hollyRouter = require('./route/Hollywood')
const techRouter = require('./route/Technology')
const fitRouter = require('./route/Fitness')
const foodRouter = require('./route/Food')
const homeRouter = require('./route/Home')
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/api",bollyRouter)
app.use("/api",hollyRouter)
app.use("/api",techRouter)
app.use("/api",fitRouter)
app.use("/api",foodRouter)
app.use("/api",homeRouter)


const axios = require('axios');

// Define your Github repository
const OWNER = "ihappysoni";
const REPO = "https://github.com/ihappysoni/BlogAppNode";

// Define your personal access token
const TOKEN = "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";

// Build the API endpoint URL
const url = `https://api.github.com/repos/${OWNER}/${REPO}/events`;

// Send the GET request with your access token
axios.get(url, {
  headers: {
    Authorization: `Token ${TOKEN}`
  }
})
.then(response => {
  // Parse the JSON response
  const events = response.data;
  // Do something with the event data
})
.catch(error => {
  // Handle any errors that occurred
  console.error("Request failed with error:", error);
});



app.listen(process.env.PORT||4000,()=>{
    console.log("app is  running");
})
