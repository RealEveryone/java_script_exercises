function create(words) {
    let mainDiv = document.getElementById('content')
    for (let idx = 0; idx < words.length; idx++) {
        let div = document.createElement('div')
        let paragraph = document.createElement('p')
        paragraph.style.display = 'none'
        paragraph.textContent = words[idx]
        div.appendChild(paragraph)

        mainDiv.appendChild(div)
        div.addEventListener("click", revealParagraphs)

    }

    function revealParagraphs(a) {
         this.children[0].display = 'block'
    }
}

