import { Validator, BarGraph, Theme } from '../module/index.js'

export class DiagramGenerator {
  constructor() {
    this.validator = new Validator()
    this.theme = new Theme()

    this.selectedTheme = this.theme.setTheme('themeB')
    this.selectedFontSize = this.theme.setFontSize(20)
  }

  async createDiagrams(city) {
    const weatherData = await this.getWeather(city)
    console.log(weatherData)

    for (let i = 0; i < weatherData.length && i <= 5; i++) {
      const dayObject = weatherData[i]
      const dayId = 'day' + (i + 1)
      this.currentDay = i

      this.createDivPerDay(dayObject, dayId)

      const humidityData = this.getHumidityData(dayObject)
      const windSpeedData = this.getWindSpeedData(dayObject)

      this.createHumidityDiagram(humidityData, dayId)
      this.createWindSpeedDiagram(windSpeedData, dayId)
    }
  }

  async getWeather(city) {
    const response = await fetch(`/api/weather?city=${city}`)
    const JSONdata = await response.json()
    const data = JSONdata.message

    return data
  }

  getHumidityData(dayObject) {
    const humidityData = dayObject.data.map(dataEntry => ({
      label: dataEntry.label,
      value: dataEntry.humidity
    }))

    return humidityData
  }

  getWindSpeedData(dayObject) {
    const windSpeedData = dayObject.data.map(dataEntry => ({
      label: dataEntry.label,
      value: dataEntry.windSpeed
    }))

    return windSpeedData
  }

  createDivPerDay(dayObject, dayId) {
    const day = document.createElement('div')
    const date = dayObject.date

    day.setAttribute('id', dayId)
    day.textContent = date

    const container = document.getElementById('diagram-container')
    container.appendChild(day)
  }

  createSVGElement(svgId, dayId) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    svg.setAttribute('id', svgId)
    svg.setAttribute('width', 336)
    svg.setAttribute('height', 224)
    svg.style.borderRadius = '15px'
    svg.style.border = '2px solid darkgreen'

    // Add svg element to html container
    document.getElementById(dayId).appendChild(svg)
  }

  createHumidityDiagram(humidityData, dayId) {
    const svgId = 'humidity' + (this.currentDay + 1)
    const validatedData = this.validator.validateData(humidityData)

    this.createSVGElement(svgId, dayId)

    const humidityGraph = new BarGraph(svgId, 336, 224)

    humidityGraph.createBarGraph(validatedData, this.selectedTheme, this.selectedFontSize)
  }

  createWindSpeedDiagram(windSpeedData, dayId) {
    const svgId = 'windSpeed' + (this.currentDay + 1)
    const validatedData = this.validator.validateData(windSpeedData)

    this.createSVGElement(svgId, dayId)

    const windSpeedGraph = new BarGraph(svgId, 336, 224)

    windSpeedGraph.createBarGraph(validatedData, this.selectedTheme, this.selectedFontSize)
  }
}
