import express from 'express'
import weatherService from '../services/weatherService.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const city = req.query.city
  const data = await weatherService.getDataFromAPI(city)
  res.json({ message: data })
})

export default router