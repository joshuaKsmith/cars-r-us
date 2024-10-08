import { setTechnologyChoice } from "./TransientState.js"

const handleTechnologyChoice = (changeEvent) => {
    if (changeEvent.target.id === "technology") {
        setTechnologyChoice(parseInt(changeEvent.target.value))
    }
}

export const TechnologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    document.addEventListener("change", handleTechnologyChoice)
    
    let technologiesHTML = `<h2>Technology</h2>
        <select id="technology">
        <option value="0">Select a technology package</option>
    `
    const technologiesStringArray = technologies.map(
        (technology) => {
            return `<option value="${technology.id}">${technology.technology}</option>`
        }
    )
    technologiesHTML += technologiesStringArray.join("")
    technologiesHTML += "</select>"
    return technologiesHTML
}