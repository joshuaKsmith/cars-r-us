export const OrdersList = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=technology&_expand=wheel&_expand=paint&_expand=interior&_expand=variety")
    const orders = await fetchResponse.json()

    let ordersHTML = ""
    const ordersStringArray = orders.map(
        (order) => {
            const subTotal = order.wheel.price + order.interior.price + order.paint.price + order.technology.price
            const varietyModifier = order.variety.modifier
            const varietyMultiplier = varietyModifier * .01
            const orderPrice = subTotal * varietyMultiplier

            return `<section>
                <div>
                    Order#${order.id}    cost${orderPrice.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </div>
            </section>`
        }
    )
    ordersHTML += ordersStringArray.join("")

    return ordersHTML
}