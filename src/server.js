import express from 'express'

const app = express()
// TODO: ändra senare till det som står i ev .env-fil
const PORT = 3000

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})