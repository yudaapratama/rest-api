/* eslint-disable import/no-extraneous-dependencies */
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/index.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
