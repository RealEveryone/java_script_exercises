function printOnNthNumber(...data) {
    let numbers = data[0]
    let nth = data[1]

    let output = []

    for (i = 0; i < numbers.length; i += nth) {
        output.push(numbers[i])
    }
    return output
}

printOnNthNumber(['1', '2', '3', '4', '5'], 6)