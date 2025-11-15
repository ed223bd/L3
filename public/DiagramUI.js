import { DiagramGenerator } from './DiagramGenerator.js'

export class DiagramUI {
  constructor () {
    this.diagramGenerator = new DiagramGenerator()

    this.addEventListenertoButton()
  }

  addEventListenertoButton () {
    document.getElementById('generateBtn').addEventListener('click', () => {
      const city = document.getElementById('city-input').value

      if (!city) {
        console.log('City not available')
      }
      this.diagramGenerator.createDiagrams(city)
    })
  }
}
