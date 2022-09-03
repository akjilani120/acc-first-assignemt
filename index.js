const http = require('http');

const express = require('express');
const router = require('./Routers/Users/Random/RandomUser.rounter');

const app = express()
const port = 5000

app.use("/user/random", router)
app.get('/', (req, res)=> {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})