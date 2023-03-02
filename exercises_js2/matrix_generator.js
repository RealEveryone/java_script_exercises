function matrixGenerator(size) {
    let filledNumber = size
    for (let i = 0; i < size; i++) {
        let content = []
        for (let i = 0; i < size; i++) {
            content.push(filledNumber)
        }
        console.log(content.join(' '))
    }
}
matrixGenerator(2)