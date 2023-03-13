function manageStock(currentStock, orderedStock) {
    let shop = createStore()
    storeStock(currentStock)
    storeStock(orderedStock)
    printStock()

    function printStock() {
        for (const key in shop.stock) {
            console.log(`${key} -> ${shop.stock[key]}`)
        }
    }

    function storeStock(stock) {
        for (let idx = 0; idx < stock.length; idx += 2) {
            let product = stock[idx]
            let quantity = stock[idx + 1]
            shop.createOrStoreProduct(product, Number(quantity))
        }
    }

    function createStore() {
        return { stock: {},
                  createOrStoreProduct(product, quantity) {
                 if (!this.stock.hasOwnProperty(product)) { this.stock[product] = 0 }
                                                           this.stock[product] += quantity} }
    }
}

manageStock(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])