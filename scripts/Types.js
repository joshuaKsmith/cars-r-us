import { setVarietyChoice } from "./TransientState.js";

const handleVarietyChoice = (changeEvent) => {
    if (changeEvent.target.name === "variety") {
        setVarietyChoice(parseInt(changeEvent.target.value))
    }
}

export const VarietyOptions = async () => {
    const response = await fetch("http://localhost:8088/varieties")
    const varieties = await response.json()

    document.addEventListener("change", handleVarietyChoice)

    return `
        <div><input type='radio' checked='checked' name='variety' value='${varieties[0].id}' />${varieties[0].type}</div>
        <div><input type='radio' name='variety' value='${varieties[1].id}' />${varieties[1].type}</div>
        <div><input type='radio' name='variety' value='${varieties[2].id}' />${varieties[2].type}</div>
    `

}