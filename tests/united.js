module.exports = {
    '@tags': ['united'],
    'Testing flight tickets selection' (browser) {
        const siteMainLogo = '[aria-label="United logo link to homepage"]';
        const oneWayRadio = '.app-components-BookFlightForm-bookFlightForm__checkmark--2DHJD';
        
        browser
            .url('https://www.united.com/en/us')
            .waitForElementVisible(siteMainLogo)
            .waitForElementVisible(oneWayRadio)
            .click(oneWayRadio)
            .saveScreenshot('tests_output/united.png');
            // .assert.containsText(".hnname", "Hacker News")
            // .waitForElementVisible('.pagetop')
            // .saveScreenshot('tests_output/first.png');
    }
}