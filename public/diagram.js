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

    createSVGElement(svgId)

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

function createSVGElement(svgId) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

  svg.setAttribute('id', svgId)
  svg.setAttribute('width', 450)
  svg.setAttribute('height', 300)
  svg.style.border = '2px solid black'

  // Add svg element to html container
  document.getElementById('diagram-container').appendChild(svg)
}

createDiagrams()
