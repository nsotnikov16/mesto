export function hideInputErrorForm (popup, validator) {
    popup.inputList.forEach(input => {
        validator.hideInputError(input)
    })
}
