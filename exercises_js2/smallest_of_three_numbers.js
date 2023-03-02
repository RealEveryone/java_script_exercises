function findSmallestNumber(...numbers) {
    let smallest = Number.MAX_VALUE
    for (const current of numbers) {
        if (current < smallest) {
            smallest = current
        }
    }
    console.log(smallest)
}

findSmallestNumber(600,

    342,

    123)
