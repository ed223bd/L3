import { Validator, BarGraph, LineGraph, Theme } from '../module/index.js'

const validator = new Validator()
const theme = new Theme()

const selectedTheme = theme.setTheme('themeB')
const selectedFontSize = theme.setFontSize(20)

async function createDiagrams() {

  const weatherData = await getWeather()
  console.log(weatherData)

  for (let i = 0; i < weatherData.length && i < 5; i++) {
    const dayObject = weatherData[i]
    const svgId = 'day' + (i + 1)

    const validatedData = validator.validateData(dayObject.data)
    const barGraph = new BarGraph(svgId, 450, 300)

    barGraph.createBarGraph(validatedData, selectedTheme, selectedFontSize)
  }

}

async function getWeather() {
  const response = await fetch('/api/weather')
  const JSONdata = await response.json()
  const data = JSONdata.message

  return data
}

function createOneDiagram() {

}



// getDataForOneDay() {

// }

createDiagrams()
// getDataForOneDay()
createOneDiagram()
