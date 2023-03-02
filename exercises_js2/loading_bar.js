function loadingBar(input) {
    let output = undefined
    if (input === 100) {
        output = '100% Complete!'
    } else {
        let signCount = getSignCount(input)
        let signs = '%'.repeat(signCount)
        let dots = '.'.repeat(10 - signCount)
        output = `${input}% [${signs}${dots}]\nStill loading...`

    }
    console.log(output)

    function getSignCount(number) {
        return number / 10
    }
}

loadingBar(200)