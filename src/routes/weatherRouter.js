import express from 'express'
import { WeatherService } from '../services/weatherService.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const city = req.query.city
  const weatherService = new WeatherService()
  const data = await weatherService.getDataFromAPI(city)
  res.json({ message: data })
})

export default router
