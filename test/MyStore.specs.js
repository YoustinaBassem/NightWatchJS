const MyStore = require("../page-objects/MyStore");

module.exports = {
    'My Store Test': function (browser) {
        let MyStore = browser.page.MyStore();

        MyStore.navigate()
            .assert.title('My Store')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'dress')
            .click('@submit');
    }
}