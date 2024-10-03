export const OrdersList = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=tech&_expand=wheel&_expand=paint&_expand=interior")
    const orders = await fetchResponse.json()

    let ordersHTML = ""
    const ordersStringArray = orders.map(
        (order) => {
            const orderPrice = order.wheel.price + order.interior.price + order.paint.price + order.tech.price

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