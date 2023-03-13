function returnCharsInRange(start, end) {

    start = charToAsciiCode(start)
    end = charToAsciiCode(end)

    let condition = false

    if (start > end) {
        [start, end] =
            [end, start]
    }

    let output = []

    for (let i = start + 1; i < end; i++) {
        output.push(String.fromCharCode(i))
    }

    function charToAsciiCode(char) {
        return char.codePointAt(0)
    }

    console.log(output.join(' '))

}

returnCharsInRange('C',

    '#')