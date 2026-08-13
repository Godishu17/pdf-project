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

    get projectE2E() {
        return $('//span[text()="E2E"]')
    }

    get submittedStatus() {
        return $('//span[text()="Submitted"]')
    }

}

export default new LoginPage()