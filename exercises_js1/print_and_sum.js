function print_and_sum(num1, num2) {
    let result = 0
    let print_format = []
    for (let i = num1; i <= num2; i++) {
        result += i
        print_format.push(i)
    }
    console.log(print_format.join(' '))

    console.log(`Sum: ${result}`)
}

print_and_sum(0, 26)