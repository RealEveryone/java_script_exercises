function registerHeroes(heroList) {
    let heroLibrary = []
    class Hero {
        constructor(name, level, items = []) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    heroList.forEach(heroProcessing)
    sortAndPrint()
    function heroProcessing(hero) {
        let splitedElements = hero.split(' / ')

        let name = splitedElements[0]
        let level = splitedElements[1]
        let items = []
        if (splitedElements.length > 2) {
            items = splitedElements[2].split(', ')
        }

        heroLibrary.push(new Hero(name, Number(level), items))

    }
    function sortAndPrint() {
        let sortedLibrary = heroLibrary.sort((first, second) => {
            return first.level - second.level
        })

        let output = ''
        for (const {name, level, items} of sortedLibrary) {
            output += `Hero: ${name}\nlevel => ${level}\n`
            if (items.length > 0) {
                output += `items => ${items.join(', ')}\n`
            }
        }
        console.log(output.trim())
    }

}

registerHeroes([

    'Batman / 2 / Banana, Gun',

    'Superman / 18 / Sword',

    'Poppy / 28 / Sentinel, Antara',
    'Gustav / 58'

])