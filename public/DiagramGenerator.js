import { Validator, BarGraph, Theme } from '../module/index.js'

export class DiagramGenerator {
  constructor() {
    this.validator = new Validator()
    this.theme = new Theme()

    this.selectedTheme = this.theme.setTheme('themeB')
    this.selectedFontSize = this.theme.setFontSize(12, 5)
  }

  async createDiagrams(city) {
    this.clearData()
    this.clearMessage()

    const weatherData = await this.getWeather(city)

    for (let i = 0; i < weatherData.length && i <= 5; i++) {
      const dayObject = weatherData[i]
      const dayId = 'day' + (i + 1)
      this.currentDay = i

      const dayDiv = this.createDivPerDay(dayId)
      const dateTitle = this.createDateTitle(dayObject)
      const diagramRow = this.createRowForDiagrams()

      this.appendElements(dayDiv, dateTitle, diagramRow)

      const humidityData = this.getHumidityData(dayObject)
      const windSpeedData = this.getWindSpeedData(dayObject)

      this.createHumidityDiagram(humidityData, dayId)
      this.createWindSpeedDiagram(windSpeedData, dayId)
    }
  }

  clearData() {
    const container = document.getElementById('diagram-container')

    container.innerHTML = ''
  }

  clearMessage() {
    const messageContainer = document.getElementById('generateBtnText')

    messageContainer.innerHTML = ''
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

  createDivPerDay(dayId) {
    const day = document.createElement('div')

    day.setAttribute('id', dayId)
    day.classList.add('day')

    return day
  }

  createRowForDiagrams() {
    const diagramRow = document.createElement('div')

    diagramRow.classList.add('diagram-row')

    return diagramRow
  }

  createDateTitle(dayObject) {
    const date = dayObject.date
    const title = document.createElement('h2')

    title.textContent = date

    return title
  }

  createAndAppendDiagramBox(title, svg, dayId) {
    const diagramBox = document.createElement('div')

    diagramBox.classList.add('diagram-box')

    const h3 = document.createElement('h3')

    h3.textContent = title

    diagramBox.appendChild(h3)
    diagramBox.appendChild(svg)

    const diagramRow = document.querySelector(`#${dayId} .diagram-row`)

    diagramRow.appendChild(diagramBox)
  }

  createSVGElement(svgId) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    svg.setAttribute('id', svgId)
    svg.setAttribute('width', 336)
    svg.setAttribute('height', 224)
    svg.style.borderRadius = '15px'
    svg.style.border = '2px solid darkgreen'

    return svg
  }

  appendElements(day, title, diagramRow) {
    const container = document.querySelector('#diagram-container')

    container.appendChild(day)
    day.appendChild(title)
    day.appendChild(diagramRow)
  }

  validateDiagramData(rawData) {
    const data = this.validator.validateData(rawData)

    return data
  }

  renderDiagram(svgId, validatedData) {
    const barGraph = new BarGraph(svgId, 336, 224)
    barGraph.createBarGraph(validatedData, this.selectedTheme, this.selectedFontSize)

  }

  createHumidityDiagram(humidityData, dayId) {
    const svgId = 'humidity' + (this.currentDay + 1)
    const title = 'Humidity (%)'

    const svg = this.createSVGElement(svgId)
    const validatedData = this.validateDiagramData(humidityData)

    this.createAndAppendDiagramBox(title, svg, dayId)
    this.renderDiagram(svgId, validatedData)
  }

  createWindSpeedDiagram(windSpeedData, dayId) {
    const svgId = 'windSpeed' + (this.currentDay + 1)
    const title = 'Wind Speed (m/s)'

    const svg = this.createSVGElement(svgId)
    const validatedData = this.validateDiagramData(windSpeedData)

    this.createAndAppendDiagramBox(title, svg, dayId)
    this.renderDiagram(svgId, validatedData)
  }
}
