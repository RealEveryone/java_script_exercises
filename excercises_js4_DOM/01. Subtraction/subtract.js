function subtract() {
    const firstNumber = Number(document.getElementById('firstNumber').value)
    const secondNumber = Number(document.getElementById('secondNumber').value)
    const divElement = document.getElementById('result')

    divElement.textContent = String(firstNumber - secondNumber)
}