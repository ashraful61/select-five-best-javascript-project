

function getInputValueById(inputId) {

    const inputField = document.getElementById(inputId)
    const inputString = inputField.value
    const inputValue = parseInt(inputString)
    inputField.value = ''

    return inputValue

}

function setValueById(value, Id) {
    const getElementId = document.getElementById(Id)
    getElementId.innerText = value

}
