function palindromeChecker(numbersList) {
    for (const number of numbersList) {
        let statement = true
        let numberAsString = stringifyNumber(number)
        for (let i = 0; i < numberAsString.length / 2; i++) {
            if (numberAsString[i] !== numberAsString[numberAsString.length - i - 1]) {
                statement = false
                break
            }
        }
        console.log(statement)

    }

    function stringifyNumber(num) {
        return num.toString()
    }
}

palindromeChecker([121, 212, 133])