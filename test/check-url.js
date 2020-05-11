module.exports = function helloBrowserStack(browser, next) {
    let expectedURL = 'http://www.google.com/';
    browser.url(function(err, url) {
        if (url === expectedURL) {
            console.log ('PASS: Actual and expected are the same');
            next(null);
        } else {
            console.log ('FAIL: actual url:' + url + ' ERROR: ' + err);
            next(err);
        }
    });
}