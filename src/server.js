import express from 'express'
import dotenv from 'dotenv'
import router from './routes/router.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
