function moviesDataBase(statements) {
    let movieLibrary = {}

    class Movie {
        constructor(name = null, director = null, releaseDate = null) {
            this.name = name;
            this.director = director;
            this.date = releaseDate;
        }

        addDirector(director) {
            this.director = director
        }

        addReleaseDate(date) {
            this.date = date
        }

        isValid() {
            return this.name !== null && this.director !== null && this.realeseDate !== null
        }
    }

    for (const statement of statements) {
        if (statement.includes('addMovie')) {
            let movieName = statement.replace('addMovie', '').trim()
            let movie = new Movie(movieName)
            movieLibrary[movieName] = movie
        } else if
        (statement.includes('directedBy')) {
            let splited = statement.split(' directedBy ')
            let movieName = splited[0]
            if (movieName in movieLibrary) {
                let movieDirector = splited[1]
                movieLibrary[movieName].addDirector(movieDirector)
            }
        } else if
        (statement.includes('onDate')) {
            let splited = statement.split(' onDate ')
            let movieName = splited[0]
            if (movieName in movieLibrary) {
                let date = splited[1]
                movieLibrary[movieName].addReleaseDate(date)
            }
        }
    }
    for (const key in movieLibrary) {
        if (movieLibrary[key].isValid()) {
            console.log(JSON.stringify(movieLibrary[key]))
        }
    }


}

moviesDataBase([

    'addMovie The Avengers',

    'addMovie Superman',

    'The Avengers directedBy Anthony Russo',

    'The Avengers onDate 30.07.2010',

    'Captain America onDate 30.07.2010',

    'Captain America directedBy Joe Russo'

])