export class DiagramUI {
  constructor(generator) {
    this.generator = generator

    this.addEventListenertoButton()
  }

  addEventListenertoButton() {
    document.getElementById('generateBtn').addEventListener('click', () => {
      const city = document.getElementById('city-input').value

      this.#updateUIIfCityAvailable(city)
    })
  }

  async #updateUIIfCityAvailable(city) {
    try {
      await this.diagramGenerator.createDiagrams(city)
    } catch (error) {
      this.#showGenerationMessage('City not available')
    }
  }

  #showGenerationMessage(message) {
    const messageContainer = document.getElementById('generateBtnText')

    messageContainer.textContent = message
  }
}
