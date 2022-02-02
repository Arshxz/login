const validation = (input) => {
    let errors = {}

    if (!input.username.length) {
        errors.username = "Username is required"
    }
    if (input.email.length < 8) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "Email is invalid"
    }
    if (input.password.length < 8) {
        errors.password = "Password should be 8 char long"
    } else if (/^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/.test(input.password)) {
        errors.password = "password must contain a letter and a number, one uppercase and one lowecase"
    }


    return errors;
}

export default validation