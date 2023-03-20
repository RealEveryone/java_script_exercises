function lockedProfile() {
    const btnCollection = Array.from(document.getElementsByTagName('button'))
    btnCollection
        .forEach((button) => {
            button.addEventListener('click', toggleInfo)
        })

    function toggleInfo() {
        let button = this
        let profile = button.parentElement
        let children = Array.from(profile.children)

        let privateInformation = children[9]
        let condition = children[4]

        console.log(children)

        if(condition.checked){
            if (button.textContent === 'Show more') {
                button.textContent = 'Hide it'
                privateInformation.style.display = 'block'
            } else {
                button.textContent = 'Show more'
                privateInformation.style.display = 'none'
            }
        }

    }
}