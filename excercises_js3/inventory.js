function registerHeroes(heroList) {
    let heroLibrary = {}
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

        heroLibrary[name] = new Hero(name, Number(level), items)

    }
    function sortAndPrint() {
        let sortedLibrary = []
        for (var hero in heroLibrary) {
            sortedLibrary.push([hero, heroLibrary[hero].level])
        }
        sortedLibrary.sort((first, second) => {
            return first[1] - second[1]
        })

        let output = ''
        for (const obj of sortedLibrary) {
            let hero = obj[0]
            output += `Hero: ${hero}\nlevel => ${heroLibrary[hero].level}\n`
            if (heroLibrary[hero].items.length > 0) {
                output += `items => ${heroLibrary[hero].items.join(', ')}\n`
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