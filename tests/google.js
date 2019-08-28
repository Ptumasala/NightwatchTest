module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';

        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdowsOpenerSelector = '#lr_button';
        const languageDropdowsValueSelector = '.goog-menuitem[value="lang_it"]';
        const updateTimeOpenerSelector = '#as_qdr_button';
        const updateTimeValueSelector = '.goog-menuitem[value="m"]';
        const searchButton = '.jfk-button[type="submit"]';
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        //const resultsPageLanguageSelector = '[aria-label="search Italian pages"]';
        //const resultsPageLastUpdateSelector = '[aria-label="Past month"]';

        browser
                .url('https://www.google.com/advanced_search')
                .setValue(mainQueryInputSelector, mainQuery)
                .click(languageDropdowsOpenerSelector)
                .click(languageDropdowsValueSelector)
                .click(updateTimeOpenerSelector)
                .click(updateTimeValueSelector)
                .click(searchButton)
                .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
                .assert.urlContains('lang_it', 'Params: Italian language is selected')
                .assert.urlContains('qdr=m', 'Params: Time period of last month is selected')
                
            browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
            //browser.assert.containsText(resultsPageLanguageSelector, 'search Italian pages', 'UI: Language is set to Italian');
            //browser.assert.containsText(resultsPageLastUpdateSelector, 'Past month', 'UI: Last month updates');

            browser.saveScreenshot('tests_output/google.png')
    }
}