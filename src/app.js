const express = require('express')
const config = require('../config')
const responses = require('./utils/handleResponses')
const { host, port } = config.api
const baseUrl = '/api/v1'
const db = require('./utils/database')

const airplaneRouter = require('./airplane/airplane.router')

const app = express()

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('Connection with databaes stablished successfully')
    })
    .catch(err => {
        console.log(err)
    })

app.get('/', (req, res) => {
    responses.success({
        res,
        status: 200,
        message: 'Welcome to bsale-airplane API',
    })
})

app.use(baseUrl, airplaneRouter)

app.get('*', (req, res) => {
    responses.error({
        res,
        status: 404,
        message: 'The URL requested does not exist'
    })
})

app.listen(port, () => {
    console.log(`Server running on: ${host}:${port}`)
})