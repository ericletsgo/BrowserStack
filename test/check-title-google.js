module.exports = function helloBrowserStack(browser, next) {
    browser.title(function(err, title) {
        if (title === 'Google') {
            console.log("PASS: Title for the page: " + title);
            next(null);
        } else {
            console.log('FAIL: ' + err);
            next(err);
        }
    })
}
