module.exports = {
    '@tags': ['first'],
    'My first test case' (browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')
            .assert.containsText(".hnname", "Hacker News")
            .waitForElementVisible('.pagetop')
            .saveScreenshot('tests_output/first.png');
    }
}