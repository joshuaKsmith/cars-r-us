import { WheelOptions } from "./Wheels.js"
import { InteriorOptions } from "./Interiors.js"
import { PaintOptions } from "./Paints.js"
import { TechnologyOptions } from "./Technologies.js"
import { SaveOrder } from './PlaceOrder.js'
import { OrdersList } from './Order.js'

const container = document.querySelector('#container')

const render = async () => {
    // const wheelOptionsHTML = await WheelOptions()
    // const interiorOptionsHTML = await InteriorOptions()
    // const paintOptionsHTML = await PaintOptions()
    // const technologyOptionsHTML = await TechnologyOptions()
    // const ordersListHTML = await OrdersList()

    const [ 
        wheelOptionsHTML, 
        interiorOptionsHTML, 
        paintOptionsHTML, 
        technologyOptionsHTML, 
        ordersListHTML 
    ] = await Promise.all([
        WheelOptions(),
        InteriorOptions(),
        PaintOptions(),
        TechnologyOptions(),
        OrdersList(),
    ])

    const buttonHTML = SaveOrder()

    container.innerHTML = `
        <h1>Cars-R-Us</h1>
        <article class="choices">
            <section class="choices__paints options">
                ${paintOptionsHTML}
            </section>        
            <section class="choices__interiors options">
                ${interiorOptionsHTML}
            </section>
            <section class="choices__wheels options">
                ${wheelOptionsHTML}
            </section>
            <section class="choices__technologies options">
                ${technologyOptionsHTML}
            </section>
        </article>
        <article class="order">
            ${buttonHTML}
        </article>
        <article class="customOrders">
            <h2>Custom Orders</h2>
            ${ordersListHTML}
        </article>
    `
}

document.addEventListener("newOrderPlaced", event => {
    console.log("State of Data has changed. Regenerating HTML...")
    render()
})

render()