function toggle() {
    const dynamicDiv = document.getElementById('extra')
    let btnExp = Array.from(document.getElementsByClassName('head'))[0]
    btnExp = Array.from(btnExp.children)[0]
    console.log(btnExp)
    console.log(btnExp.textContent)


    if (btnExp.textContent !== 'More') {

        dynamicDiv.style.display = 'none'
        btnExp.textContent = 'More'

    } else {
        dynamicDiv.style.display = 'block'
        btnExp.textContent = 'Less'
    }

}