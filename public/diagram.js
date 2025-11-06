import { Validator, BarGraph, LineGraph, Theme } from '../module/index.js'

const validator = new Validator()
const theme = new Theme()

const barGraph = new BarGraph('barGraph', 450, 300)
// Skapa linegraph
 
// Validera

async function getWeather() {
  const response = await fetch('/api/weather')
  const data = await response.json()
  console.log(data.message)

  const validatedData = validator.validateData(data)

  const selectedTheme = theme.setTheme('themeB')
  const selectedFontSize = theme.setFontSize(20)

  barGraph.createBarGraph(validatedData, selectedTheme, selectedFontSize)
}
getWeather()


