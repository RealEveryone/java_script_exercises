function oddCalculatorEvenIfRight(number) {
    let evenSum = 0
    let oddSum = 0

    while (number > 0) {

        let current = Math.floor(number % 10)
        number = number / 10

        if (current % 2 === 0) {
            evenSum += current
        } else {
            oddSum += current
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)


}

oddCalculatorEvenIfRight(1000435)