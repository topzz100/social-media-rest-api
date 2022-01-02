const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config()
const connectDB = require('./connect')
const users = require('./routes/users')
const auth = require('./routes/auth')
const post = require('./routes/posts')

connectDB(process.env.MONGO_URI)
app.use(express.json())

app.use(helmet())
app.use(morgan('common'))

app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/posts', post)

const port = 5000
app.listen(port, () => { console.log(`server listening at port ${port}`)})