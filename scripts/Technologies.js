import { setTechnologyChoice } from "./TransientState.js"

const handleTechnologyChoice = (changeEvent) => {
    if (changeEvent.target.id === "tech") {
        setTechnologyChoice(parseInt(changeEvent.target.value))
    }
}

export const TechnologyOptions = async () => {
    const response = await fetch("http://localhost:8088/teches")
    const technologies = await response.json()

    document.addEventListener("change", handleTechnologyChoice)
    
    let technologiesHTML = `<h2>Technology</h2>
        <select id="tech">
        <option value="0">Select a technology package</option>
    `
    const technologiesStringArray = technologies.map(
        (tech) => {
            return `<option value="${tech.id}">${tech.tech}</option>`
        }
    )
    technologiesHTML += technologiesStringArray.join("")
    technologiesHTML += "</select>"
    return technologiesHTML
}