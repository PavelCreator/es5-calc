/*var el = require('../support/elements.js');*/
describe('View elements on page', function () {
  it('View element is presented', function () {
    /*        expect((el.view.field).isPresent()).toBe(true);*/
    /*        expect(element(by.id('field')).isPresent()).toBe(true);*/
    /*        expect(browser.driver(by.id('field')).isPresent()).toBe(true);*/
    var field = browser.driver.findElement(By.id('example'))
    console.log(field);
    expect(field.isPresent()).toBe(true);

  });
});