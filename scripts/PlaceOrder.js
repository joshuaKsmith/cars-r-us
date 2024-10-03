import { SaveOrderSubmission } from "./TransientState.js"


const handleOrderSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrder") {
        SaveOrderSubmission()
    }
}
export const SaveOrder = () => {
    document.addEventListener("click", handleOrderSubmissionClick)

    return "<div><button id='saveOrder'>Place Order</button></div>"
}