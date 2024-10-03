import { setInteriorChoice } from "./TransientState.js"

const handleInteriorChoice = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        setInteriorChoice(parseInt(changeEvent.target.value))
    }
}

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorChoice)

    let interiorsHTML = `<h2>Interiors</h2>
        <select id="interior">
        <option value="0">Select an interior</option>
    `
    const interiorsStringArray = interiors.map(
        (interior) => {
            return `<option value="${interior.id}">${interior.interior}</option>`
        }
    )
    interiorsHTML += interiorsStringArray.join("")
    interiorsHTML += "</select>"
    return interiorsHTML
}