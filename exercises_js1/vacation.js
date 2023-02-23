function calculate_price(group_size, group_type, day) {
    let price_schedule = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.80,
            'Sunday': 10.46
        },

        'Business': {
            'Friday': 10.90,
            'Saturday': 15.60,
            'Sunday': 16
        },

        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.50
        }
    }

    let price = price_schedule[group_type][day]
    let result = price * group_size
    
    if (group_type === 'Students' && group_size >= 30) {
        let sum = result * 0.85
        console.log(`Total price: ${sum.toFixed(2)}`)
    } else if (group_type === 'Business' && group_size >= 100) {
        let sum = result - 10 * price
        console.log(`Total price: ${sum.toFixed(2)}`)
    } else if (group_type === 'Regular' && group_size >= 10 && group_size <= 20) {
        let sum = result * 0.95
        console.log(`Total price: ${sum.toFixed(2)}`)
    } else {
        console.log(`Total price: ${result.toFixed(2)}`)
    }
}


