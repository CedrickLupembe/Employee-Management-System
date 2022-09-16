const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const db = require('./db/db')
const bodyParser = require('body-parser')
const routes = require('./routes/root')


const app = express()

app.use(BodyParser.urlencoded({extended: false}))
app.use(BodyParser.json())
app.use(cors())

app.use('/api/v1/employees', routes)



PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server run in port ${PORT}`);
})