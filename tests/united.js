module.exports = {
    '@tags': ['united'],
    'Testing flight tickets selection' (browser) {
        const siteMainLogo = '[aria-label="United logo link to homepage"]';
        const oneWayRadio = '.app-components-BookFlightForm-bookFlightForm__radioBtnContainer--VrnUD';
        const fromWhereTextBox = '#bookFlightOriginInput';
        const toWhereTextBox = '#bookFlightDestinationInput';
        const departureDateInput = '#DepartDate';
        const neededDate = '[aria-label="Sunday, October 20, 2019"]';
        const classSelectionMenu = '#cabinType';
        const economyClass = '[aria-label="Economy"]';
        const findFlightsButton = '[aria-label="Find flights"]';
        const correctDeparture = '[aria-label="New York, NY, US (JFK - Kennedy)"]';
        const correctArrival = '[aria-label="Miami, FL, US (MIA - All Airports)"]';

        browser
            .url('https://www.united.com/en/us')
            .waitForElementVisible(siteMainLogo)
            .waitForElementVisible(fromWhereTextBox)
            .waitForElementVisible(toWhereTextBox)
            .waitForElementVisible(oneWayRadio)
            .pause(1000)
            .useXpath().click("//*[contains(text(), 'One-way')]")
            .useCss()
            .pause(1000)
            .setValue(fromWhereTextBox, 'New York JFK')
            .pause(2000)
            .waitForElementVisible(correctDeparture)
            .click(correctDeparture)
            .setValue(toWhereTextBox, 'Miami, FL, US (MIA - All Airports)')
            .waitForElementVisible(correctArrival)
            .click(correctArrival)
            .waitForElementVisible(departureDateInput)
            .click(departureDateInput)
            .pause(1000)
            .click(neededDate)
            .waitForElementVisible(economyClass)
            .click(classSelectionMenu)
            .click(economyClass)
            .waitForElementVisible(findFlightsButton)
            .click(findFlightsButton)
            .pause(5000)
        // now you should see available tickets as per request
            .useXpath().click("//*[contains(text(), '(most restricted)')]")
            .saveScreenshot('tests_output/united.png');
    }
}