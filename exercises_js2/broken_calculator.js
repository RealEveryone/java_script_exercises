function brokenCalculator(num1, num2, num3) {
    let result = subtract(sum(num1, num2), num3)
    console.log(result)

    function sum(num1, num2) {
        return num1 + num2
    }

    function subtract(sum, num3) {
        return sum - num3
    }

}

brokenCalculator(23,

    6,

    10)