function createEmptyOrder() {
    return {
        buyer: {
            name: "",
            email: "",
            phone: ""
        },
        items: [],
        cant: 0,
        total: 0.0,
        state: "sin enviar"
    }
}

export function getCurrentOrder() {
    const order = window.localStorage.getItem("currentOrder")
    return order != null ? JSON.parse(order) : createEmptyOrder()
}

export function saveCurrentOrder(order) {
    window.localStorage.setItem("currentOrder", JSON.stringify(order))
}

export function removeCurrentOrder() {
    const newOrder = createEmptyOrder()
    window.localStorage.setItem("currentOrder", JSON.stringify(newOrder))
}