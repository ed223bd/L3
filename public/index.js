import { DiagramUI } from './DiagramUI.js'
import { DiagramGenerator } from './DiagramGenerator.js'

const diagramGenerator = new DiagramGenerator()
window.diagramUI = new DiagramUI(diagramGenerator)
