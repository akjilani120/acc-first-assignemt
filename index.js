const http = require('http');
const express = require('express');
const router = require('./Routers/Users/Random/RandomUser.rounter');
const app = express()
const cors = require ("cors")
require('dotenv').config()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
app.use("/user", router)
app.get('/', (req, res)=> {
  res.send('acc first assignment Complete !!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})