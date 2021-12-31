const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config()
const connectDB = require('./connect')


connectDB(process.env.MONGO_URI)

app.use(helmet())
app.use(morgan('common'))

app.get('./', (req, res) => {
  res.send('Server ready')
})
const port = 5000
app.listen(port, () => { console.log(`server listening at port ${port}`)})