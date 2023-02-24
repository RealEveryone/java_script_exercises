function roadRadar(speed, type) {
    let road_types = {
        'motorway': 130,
        'interstate': 90,
        'residential': 20,
        'city': 50,
    }

    let speed_limit = road_types[type]
    let status = ''

    let difference = speed - speed_limit

    while (true) {
        if (difference <= 0) {
            console.log(`Driving ${speed} km/h in a ${speed_limit} zone`)
            break
        } else if (difference > 0 && difference <= 20) {
            status = 'speeding'
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speed_limit} - ${status}`)
        break
    }
}

roadRadar(120, 'interstate')