import { Validator, BarGraph, LineGraph, Theme } from '../module/index.js'

const validator = new Validator()
const theme = new Theme()

const barGraph = new BarGraph('barGraph', 450, 300)
// Skapa linegraph
 
// Validera

// Gör en fetch mot backend istället... 
const data = [
  { label: 'A', value: 2 },
  { label: 'B', value: 12 },
  { label: 'C', value: 32 },
  { label: 'D', value: 22 }
]

const selectedTheme = theme.setTheme('themeA')
const selectedFontSize = theme.setFontSize(15)

barGraph.createBarGraph(data, selectedTheme, selectedFontSize)
