import { DiagramUI } from './DiagramUI.js'
import { DiagramGenerator } from './DiagramGenerator.js'

window.addEventListener('DOMContentLoaded', () => {
  const diagramGenerator = new DiagramGenerator()
  window.diagramUI = new DiagramUI(diagramGenerator)
})
