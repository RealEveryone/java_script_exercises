function rotation(...input) {
    let list_of_numbers = input[0]
    let rotations = input[1]

    for (let i = 0; i < rotations; i++) {
        let current = list_of_numbers.shift()
        list_of_numbers.push(current)
    }
    console.log(list_of_numbers.join(' '))
}

rotation([32, 21, 61, 1], 4)