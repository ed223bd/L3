import express from 'express'
import { router } from './routes/weather.js'

const app = express()
// TODO: ändra senare till det som står i ev .env-fil
const PORT = 3000

app.use(express.static('public'))
app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})