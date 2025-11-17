import { DiagramGenerator } from './DiagramGenerator.js'

export class DiagramUI {
  constructor () {
    this.diagramGenerator = new DiagramGenerator()

    this.addEventListenertoButton()
  }

  addEventListenertoButton () {
    document.getElementById('generateBtn').addEventListener('click', () => {
      const city = document.getElementById('city-input').value

      this.#updateUIIfCityAvailable(city)
    })
  }

  #updateUIIfCityAvailable (city) {
    try {
      this.diagramGenerator.createDiagrams(city)
    } catch (error) {
      // Show message that city not available
      this.#showMessage('City not available')
    }
  }

  #showMessage () {
    
  }
}
