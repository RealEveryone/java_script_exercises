function calculate_fruit_price(fruit, gr, price_per_kg) {
    let kg = (gr / 1000)
    let total_price = price_per_kg * kg

    console.log(`I need $${total_price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}

calculate_fruit_price('apple', 1563, 2.35)