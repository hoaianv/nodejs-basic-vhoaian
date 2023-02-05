import express from 'express'
import configViewEngine from './configs/viewengine'
import initWebRoute from './route/web'
import initAPIRoute from './route/api'
import connection from './configs/connectDB.js'

const app = express()
require('dotenv').config()
const port = process.env.port
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// setup view engine
configViewEngine(app)
// init web route
initWebRoute(app)
//init api route
initAPIRoute(app)
app.listen(port, () => {
  console.log(`example app  listening  at http://localhost:${port}`)
})
