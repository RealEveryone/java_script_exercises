
function sumOfDigits(num) {
    let total_sum = 0
    let num_as_string = num.toString()
    for (let x = 0; x < num_as_string.toString().length; x++) {
        let current = num_as_string[x]
        total_sum += parseInt(current)
    }
    console.log(total_sum)
}

sumOfDigits(543)