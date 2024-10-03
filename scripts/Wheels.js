import { setWheelChoice } from "./TransientState.js"

const handleWheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        setWheelChoice(parseInt(changeEvent.target.value))
    }
}

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", setWheelChoice)
    
    let wheelsHTML = `<h2>Wheels</h2>
        <select id="wheel">
        <option value="0">Select a wheel package</option>
    `
    const wheelsStringArray = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.wheel}</option>`
        }
    )
    wheelsHTML += wheelsStringArray.join("")
    wheelsHTML += "</select>"
    return wheelsHTML
}