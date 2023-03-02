function passwordValidator(password) {

    let validation1 = validateLength(password)
    let validation2 = validateChars(password)
    let validation3 = validateConditions(password)

    if (validation1 && validation2 && validation3) {
        console.log('Password is valid')
    }

    function validateLength(password) {
        let condition = password.length > 10 || password.length < 6
        if (condition) {
            console.log("Password must be between 6 and 10 characters")
        }
        return !condition
    }

    function validateChars(password) {
        let condition = Boolean(password.match(/^[A-Za-z0-9]*$/))
        if (!condition) {
            console.log("Password must consist only of letters and digits")
        }
        return condition
    }

    function validateConditions(password) {
        let condition = Boolean(password.match(/[0-9]{2,}/))
        if (!condition) {
            console.log("Password must have at least 2 digits")
        }
        return condition
    }

}

passwordValidator('Pa$s$s')