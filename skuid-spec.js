describe('Skuid Tests', function() {
    var products = require("./products.js");
    var employees = require("./employees.js");
    var advertisements = require("./advertisements.js");

    var humanResourcesLink=element(by.id("nav-human-resources"));
    var advertisementsLink=element(by.id("nav-advertisements"))
    beforeEach(()=>{
        browser.waitForAngularEnabled(false);

        browser.get('https://tech-projects-us-trial.skuidsite.com/skuidsample');
        browser.sleep(5000);
    })
    
    it('Verify the Products List table is present', function() {
      expect(products.productListTable.isPresent()).toBe(true);
    });

    it('Verify the Employee Map is present', function() {
      humanResourcesLink.click().then(function(){
        browser.sleep(5000);
        expect(employees.employeeLocationMap.isPresent()).toBe(true);
        expect(employees.employeeLocationMap.element(by.tagName("tspan")).getText()).toEqual("Employee Location");
      });
    });

    it('Verify the Advertisement card deck is present', function() {
      advertisementsLink.click().then(function(){
        browser.sleep(5000);
        expect(advertisements.cardDeck.isPresent()).toBe(true);
      });
    });
  });