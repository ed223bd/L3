import express from 'express'
import weatherService from '../services/temperatureService.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const data = await weatherService.getDataFromAPI()
  res.json({ message: data })
})

export default router