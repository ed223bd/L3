import express from 'express'
import { WeatherService } from '../services/WeatherService.js'
import { WeatherParser } from '../utils/WeatherParser.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const city = req.query.city
  const weatherparser = new WeatherParser()
  const weatherService = new WeatherService(weatherparser)
  const data = await weatherService.getDataFromAPI(city)
  res.json({ message: data })
})

export default router
