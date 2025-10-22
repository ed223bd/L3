import { BaseChart } from './BaseChart.js'

/**
 * Class that creates a Line Graph diagram by looping through each data
 * object in an array and drawing to the SVG element.
 */
export class LineGraph extends BaseChart {
  /**
   * Main method that makes calculations for line graph and calls on the drawing.
   *
   * @param {Array} data - The data array with objects.
   * @param {object} theme - The chosen theme with attributes.
   * @param {number} fontSize - The chosen font size.
   */
  createLineGraph (data, theme, fontSize) {
    const spaceBetweenPoints = (this.svgWidth - this.margin) / data.length
    const highestValue = Math.max(...data.map(d => d.value))

    this.createAxis(highestValue, theme, fontSize)

    let startingPointX = 0

    for (let i = 0; i < data.length; i++) {
      const value = data[i].value
      const label = data[i].label

      const heightOfPoint = Math.floor(value / highestValue * (this.svgHeight - this.topMargin - this.margin))

      let heightOfNextPoint
      if (i === data.length - 1) {
        // To make the last line into just a point (no line after)
        heightOfNextPoint = heightOfPoint
      } else {
        heightOfNextPoint = Math.floor(data[i + 1].value / highestValue * (this.svgHeight - this.topMargin - this.margin))
      }

      if (i === 0) {
        startingPointX += this.leftMargin
      } else if (i === data.length) {
        startingPointX += 0
      } else {
        startingPointX += spaceBetweenPoints
      }

      let nextPointX
      if (i === data.length - 1) {
        nextPointX = startingPointX
      } else {
        nextPointX = startingPointX + spaceBetweenPoints
      }

      const startingPointY = this.svgHeight - heightOfPoint - this.margin
      const nextPointY = this.svgHeight - heightOfNextPoint - this.margin

      const labelHeight = this.svgHeight - this.margin / 2

      this.#drawLine(startingPointX, startingPointY, nextPointX, nextPointY, theme)
      this.#drawValue(startingPointX, startingPointY, value, theme, fontSize)
      this.#drawLabel(startingPointX, labelHeight, label, theme, fontSize)
    }
  }

  #drawLine(startingPointX, startingPointY, nextPointX, nextPointY, theme) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    path.setAttribute('d', `
      M ${startingPointX} ${startingPointY}
      L ${nextPointX} ${nextPointY}
    `)
    path.setAttribute('fill', 'none')
    path.setAttribute('stroke', theme.color)
    path.setAttribute('stroke-opacity', theme.colorOpacity)
    path.setAttribute('stroke-width', '4')
    path.setAttribute('stroke-linecap', 'round')

    this.svg.appendChild(path)
  }

  #drawValue (startingPointX, startingPointY, value, theme, fontSize) {
    const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    valueText.setAttribute('x', startingPointX)
    valueText.setAttribute('y', startingPointY)
    valueText.setAttribute('text-anchor', 'middle')
    valueText.setAttribute('font-family', theme.font)
    valueText.setAttribute('font-size', fontSize)
    valueText.textContent = value

    this.svg.appendChild(valueText)
  }

  #drawLabel (startingPointX, labelHeight, label, theme, fontSize) {
    const labelText = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    labelText.setAttribute('x', startingPointX)
    labelText.setAttribute('y', labelHeight)
    labelText.setAttribute('text-anchor', 'middle')
    labelText.setAttribute('font-family', theme.font)
    labelText.setAttribute('font-size', fontSize)
    labelText.textContent = label

    this.svg.appendChild(labelText)
  }
}