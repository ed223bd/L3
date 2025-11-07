import { Validator, BarGraph, LineGraph, Theme } from '../module/index.js'

const validator = new Validator()
const theme = new Theme()

const barGraph = new BarGraph('day1', 450, 300)
// Skapa linegraph

// Validera

async function getWeather() {
  const response = await fetch('/api/weather')
  const JSONdata = await response.json()
  const data = JSONdata.message
  console.log(data)

  const validatedData = validator.validateData(data)

  const selectedTheme = theme.setTheme('themeB')
  const selectedFontSize = theme.setFontSize(20)

  barGraph.createBarGraph(validatedData, selectedTheme, selectedFontSize)
}
getWeather()


