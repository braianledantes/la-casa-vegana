function createEmptyOrder() {
    return {
        buyer: {
            name: undefined,
            email: undefined,
            phone: undefined
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
    window.localStorage.setItem("currentOrder", createEmptyOrder())
}