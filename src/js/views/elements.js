// import Spreadsheet from '../modules/spreadsheet'
//list of all DOM elements
export const container = document.querySelector("#container")
export const canvasDom = document.querySelector("#sheet_1")
export const tableDom  = document.querySelector("#hidden_table")
export const input = document.querySelector("#input")

export const createNewDiv = document.createElement("div")

export const screenWidth = document.documentElement.clientWidth
export const screenHeight = document.documentElement.clientHeight
export const ctx = canvasDom.getContext("2d")
ctx.font = "400 13px Arial, 'Lato', 'Source Sans Pro', 'Roboto', 'Helvetica', 'sans-serif'"


// export  const spreadSheet = new Spreadsheet()
export const pxRation = window.devicePixelRatio || 1

//GLOBAL STATE
export const state = {}

state.verticalSlider = false
state.lastPerc = 0

state.horizontalSlider = false
state.hLastPerc = 0