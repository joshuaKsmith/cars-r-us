import { setColorChoice } from "./TransientState.js"

const handleColorChoice = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        setColorChoice(parseInt(changeEvent.target.value))
    }
}

export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    document.addEventListener("change", handleColorChoice)

    let paintsHTML = `<h2>Paint Colors</h2>
        <select id="paint">
        <option value="0">Select a paint color</option>
    `
    const paintsStringArray = paints.map(
        (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )
    paintsHTML += paintsStringArray.join("")
    paintsHTML += "</select>"
    return paintsHTML
}