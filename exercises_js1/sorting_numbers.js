function number_sorting(list) {
    list.sort(function (a, b) {
        return a - b
    })
    let output = []
    while (list.length > 0) {
        let smallest = list.shift()
        let biggest = list.pop()
        output.push(smallest)
        output.push(biggest)
    }
    return output
}

console.log(number_sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))