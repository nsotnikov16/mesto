export function hideInputErrorForm (popup, validator) {
    popup._inputList.forEach(input => {
        validator.hideInputError(input)
    })
}
