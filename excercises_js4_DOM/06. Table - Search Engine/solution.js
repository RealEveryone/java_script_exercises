function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    const searchField = document.getElementById('searchField')

    function onClick() {
        let searchedWord = searchField.value
        console.log(searchedWord)

        const matrix = Array.from(document.querySelectorAll('tbody tr'))
        for (const row of matrix) {

            if (row.classList.contains('select')) {
                row.classList.remove('select')
            }

                if (row.textContent.trim().includes(searchedWord)) {
                    row.classList.add('select')
                }


        }
        searchField.value = ''
    }



}