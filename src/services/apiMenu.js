// import axios from "axios"

const menu = [
    {
        id: "1",
        name: "Completa",
        details: "Burger de pernil, jamón, queso vegano, lechuga, tomate y pepino",
        category: "Burguer",
        price: "3500.00",
        img: "https://queresto.com/uploads/images/57139_1618330075114_584.jpeg"
    },
    {
        id: "2",
        name: "Burguer Pizza",
        details: "Pizza con queso de papas/maní/girasol, morrón rojo, aceitunas, cebolla, medallón de burger de lentejas, jamón y queso vegano",
        category: "Burguer",
        price: "9500.00",
        img: "https://queresto.com/uploads/images/316540_1618331475380_153.jpeg"
    },
    {
        id: "3",
        name: "Soja",
        details: "Rellenas de verduras salteadas con soja texturizada",
        category: "Empanadas",
        price: "9500.00",
        img: "https://queresto.com/uploads/images/57106_1618287460335_994.jpeg"
    },
    {
        id: "4",
        name: "Choclo",
        details: "Rellenas de choclo sabor huevo y cebollitas",
        category: "Empanadas",
        price: "9500.00",
        img: "https://queresto.com/uploads/images/360959_1623677653847_405.jpeg"
    }
]

export function getCompleteMenu() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: menu })
        }, 2000);
    })
}

export function getCategories() {
    return new Promise(resolve => {
        setTimeout(() => {
            const categories = new Set();
            menu.forEach(item => {
                categories.add(item.category);
            })
            const result = [...categories]
            resolve({ data: result })
        }, 1000);
    })
}

export function getMenuByCategory(category) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (category) {
                const result = menu.filter(item => item.category === category)
                resolve({ data: result })
            }
            resolve({ data: menu })
        }, 2000);
    })
}

export function getMenuItemById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = menu.find(item => item.id === id)

            if (!result) {
                reject({ error: `Menu Item with id ${id} don't found` })
            }

            resolve({ data: result })
        }, 2000);
    })
}