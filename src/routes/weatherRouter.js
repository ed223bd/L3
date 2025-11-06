import express from 'express'
import weatherService from '../services/weatherService.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const testData = await weatherService.dataToDiagram()
  res.json(testData)
})

export default router