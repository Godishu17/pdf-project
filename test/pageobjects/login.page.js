class LoginPage {

    get emailInput() {
        return $('input[type="email"]')
    }

    get passwordInput() {
        return $('input[type="password"]')
    }

    get signInBtn() {
        return $('button[type="submit"]')
    }
}

export default new LoginPage()