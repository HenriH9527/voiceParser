const express = require('express')
const app = express()
const user = require('./routes/users')
const debug = require('debug')('my-application')

app.use('/api/users', user)

app.listen(3030, (req, res) => {
    debug('Server is Running at Port: 3030')
})