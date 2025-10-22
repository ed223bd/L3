/**
 * Sets private fields for BarGraph and LineGraph.
 * Creates the steps on y-axis depending on the height of the largest value in a data array.
 */
export class BaseChart {
  #svg
  #svgWidth
  #svgHeight
  #margin
  #leftMargin
  #topMargin

  /**
   * Sets the size of the SVG element for calculations.
   *
   * @param {string} svgId - The id for the SVG element.
   * @param {number} width - The width to make calculations from.
   * @param {number} height - The height to make calculations from.
   */
  constructor (svgId, width, height) {
    this.#svg = document.querySelector(`#${svgId}`)
    this.#svgWidth = width
    this.#svgHeight = height
    this.#margin = this.#svgWidth * 0.1
    this.#leftMargin = this.#svgWidth * 0.12
    this.#topMargin = this.#svgWidth * 0.14
  }

  get svg () {
    return this.#svg
  }

  get svgWidth () {
    return this.#svgWidth
  }

  get svgHeight () {
    return this.#svgHeight
  }

  get margin () {
    return this.#margin
  }

  get leftMargin () {
    return this.#leftMargin
  }

  get topMargin () {
    return this.#topMargin
  }

  /**
   * Main method that makes calculations for axis and calls on the drawing.
   *
   * @param {number} highestValue - The highest value in a data array.
   * @param {object} theme - The chosen theme with attributes.
   * @param {number} fontSize - The chosen font size.
   */
  createAxis (highestValue, theme, fontSize) {
    const mainAxisLine = this.#svgHeight - this.#margin
    this.#drawMainAxisLine(mainAxisLine)

    const step = this.#assignStepValue(highestValue)

    let lastStep
    for (let i = 0; i <= highestValue; i += step) {
      const y = this.#svgHeight - this.#margin - (i / highestValue) * (this.#svgHeight - this.#margin - this.#topMargin)

      this.#drawMinorAxisLines(y)
      this.#drawMinorAxisLinesLabels(y, i, theme, fontSize)

      lastStep = i
    }

    // Add an extra step if highestValue is more than the last step
    if (highestValue % step !== 0) {
      const i = lastStep + step
      const y = this.#svgHeight - this.#margin - (i / highestValue) * (this.#svgHeight - this.#margin - this.#topMargin)
      this.#drawMinorAxisLines(y)
      this.#drawMinorAxisLinesLabels(y, i, theme, fontSize)
    }
  }

  #assignStepValue (highestValue) {
    let step
    if (highestValue <= 10) {
      step = 1
    } else if (highestValue > 10 && highestValue <= 50) {
      step = 5
    } else {
      step = 10
    }
    return step
  }

  #drawMainAxisLine (mainAxisLine) {
    const axisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    axisLine.setAttribute('x1', 10)
    axisLine.setAttribute('x2', 10)
    axisLine.setAttribute('y1', 10)
    axisLine.setAttribute('y2', mainAxisLine)
    axisLine.setAttribute('stroke', 'black')
    axisLine.setAttribute('stroke-width', 2)

    this.svg.appendChild(axisLine)
  }

  #drawMinorAxisLines (y) {
    const minorLines = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    minorLines.setAttribute('x1', 5)
    minorLines.setAttribute('y1', y)
    minorLines.setAttribute('x2', 15)
    minorLines.setAttribute('y2', y)
    minorLines.setAttribute('stroke', 'black')
    minorLines.setAttribute('stroke-width', 1)

    this.svg.appendChild(minorLines)
  }

  #drawMinorAxisLinesLabels (y, i, theme, fontSize) {
    const minorLinesLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text')

    minorLinesLabel.setAttribute('x', 15)
    minorLinesLabel.setAttribute('y', y + 5)
    minorLinesLabel.setAttribute('font-family', theme.font)
    minorLinesLabel.setAttribute('font-size', fontSize)
    minorLinesLabel.textContent = i

    this.svg.appendChild(minorLinesLabel)
  }
}