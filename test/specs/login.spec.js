import LoginPage from '../pageobjects/login.page.js'

describe('Login', () => {

    it('should login', async () => {

        await browser.url('https://app.production.ae/sign-in')

        await LoginPage.emailInput.setValue('demo-reviewer@acw.solutions')
        await LoginPage.passwordInput.setValue('Passw0rd!')

        await LoginPage.signInBtn.click()

        await LoginPage.projectE2E.click()

        await browser.pause(5000)

    })

})