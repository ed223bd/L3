/**
 * Theme class sets the theme to be used in BarGraph, LineGraph and BaseChart.
 */
export class Theme {
  setTheme (chosenTheme) {
    if (chosenTheme !== 'themeA' && chosenTheme !== 'themeB') {
      throw new Error('Choose one of the themes available')
    }

    if (chosenTheme === 'themeA') {
      const themeA = {
        color: 'blue',
        colorOpacity: 0.2,
        border: 'black',
        borderWidth: '1',
        font: 'Times New Roman',
        fontColor: 'black'
      }
      return themeA
    }

    if (chosenTheme === 'themeB') {
      const themeB = {
        color: 'green',
        colorOpacity: 0.4,
        border: 'darkgreen',
        borderWidth: '2',
        font: 'Papyrus',
        fontColor: 'black'
      }
      return themeB
    }
  }

  setFontSize (chosenSize) {
    if (typeof chosenSize !== 'number') {
      throw new Error('Font size needs to be a number.')
    }

    if (chosenSize <= 0) {
      throw new Error('Font size needs to a positive number and not 0.')
    }

    const fontSize = chosenSize
    return fontSize
  }
}