const express = require('express')
const app = express()

const PORT = process.env.PORT || 4444
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))
const mongoose = require('mongoose')
const DB_URI = 'mongodb://localhost:27017/shorten_url'
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
module.exports = connection
