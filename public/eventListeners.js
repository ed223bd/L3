import { DiagramGenerator } from "./diagram"

const diagramGenerator = new DiagramGenerator()

document.getElementById('generateBtn').addEventListener('click', () => {
  const city = document.getElementById('city-input').value

  if (!city) {
    showUserMessage('Please enter a city')
    return
  }
  diagramGenerator.createDiagrams(city)
})