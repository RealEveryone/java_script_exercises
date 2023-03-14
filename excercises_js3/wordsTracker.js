function wordsTracker(data) {
    let dictionary = {}

    let trackedWords = data[0].split(' ')
    for (const trackedWord of trackedWords) {
        dictionary[trackedWord] = 0
    }
    data.shift()
    data.forEach(value => {
        if (dictionary.hasOwnProperty(value)) {
            dictionary[value] += 1
        }
    })

    let sortedDictionary = sortDict()
    printDict()

    function sortDict(){
        let sorted = []
        for (const key in dictionary) {
            sorted.push([key, dictionary[key]])
        }
        sorted.sort((first, second) => {
            return second[1] - first[1]
        })
        return sorted
    }

    function printDict(){
        for (const obj of sortedDictionary) {
            let word = obj[0]
            console.log(`${word} - ${dictionary[word]}`)
        }
    }


}
wordsTracker([

    'is the',

    'first', 'sentence', 'Here', 'is',

    'another', 'the', 'And', 'finally', 'the',

    'the', 'sentence'])