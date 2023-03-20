function addItem() {
    const select = document.getElementById('menu')
    const text = document.getElementById('newItemText')
    const value = document.getElementById('newItemValue')

    let textContent = text.value
    let valueContent = value.value

    console.log(textContent)
    console.log(valueContent)

    let option = document.createElement('option')
    option.textContent = textContent
    option.value = valueContent

    text.value = ''
    value.value = ''



    select.appendChild(option)

}