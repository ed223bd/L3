import express from 'express'
import dotenv from 'dotenv'
import router from './routes/router.js'

dotenv.config()
const app = express()
// TODO: ändra senare till det som står i ev .env-fil
const PORT = 3000

app.use(express.static('public'))
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
