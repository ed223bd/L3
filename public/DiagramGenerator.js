import { Validator, BarGraph, Theme } from '../module/index.js'

export class DiagramGenerator {
  constructor () {
    this.validator = new Validator()
    this.theme = new Theme()

    this.selectedTheme = this.theme.setTheme('themeB')
    this.selectedFontSize = this.theme.setFontSize(20)
  }

  async createDiagrams (city) {
    const weatherData = await this.getWeather(city)
    console.log(weatherData)

    for (let i = 0; i < weatherData.length && i <= 5; i++) {
      const dayObject = weatherData[i]
      const svgId = 'day' + (i + 1)

      this.createSVGElement(svgId)

      const humidityData = dayObject.data.map(dataEntry => ({
        label: dataEntry.label,
        value: dataEntry.humidity
      }))

      const windSpeedData = dayObject.data.map(dataEntry => ({
        label: dataEntry.label,
        value: dataEntry.windSpeed
      }))

      const validatedData = this.validator.validateData(humidityData)
      const barGraph = new BarGraph(svgId, 336, 224)

      barGraph.createBarGraph(validatedData, this.selectedTheme, this.selectedFontSize)
    }
  }

  async getWeather (city) {
    const response = await fetch(`/api/weather?city=${city}`)
    const JSONdata = await response.json()
    const data = JSONdata.message

    return data
  }

  createSVGElement (svgId) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    svg.setAttribute('id', svgId)
    svg.setAttribute('width', 336)
    svg.setAttribute('height', 224)
    svg.style.borderRadius = '15px'
    svg.style.border = '2px solid darkgreen'

    // Add svg element to html container
    document.getElementById('humidity-container').appendChild(svg)
  }
}
