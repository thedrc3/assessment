describe('Calculator Tests', function() {
    var calculator = require("./calculator.js");

    beforeEach(()=>{
        browser.waitForAngularEnabled(false);

        browser.get("https://www.calculatorsoup.com/calculators/math/basic.php");
        browser.sleep(5000);
    })
    
    it('Verify addition', function() {
      var expectedValue = "8";
      
      calculator.clickNumberButton("5");
      calculator.clickOperator("add");
      calculator.clickNumberButton("3");
      calculator.clickOperator("calculate");
      expect(calculator.displayValue.getAttribute("value")).toBe(expectedValue);
    });

    it('Verify subtraction', function() {
        var expectedValue = "9";
        
        calculator.clickNumberButton("2");
        calculator.clickNumberButton("1");
        calculator.clickOperator("subtract");
        calculator.clickNumberButton("1");
        calculator.clickNumberButton("2");
        calculator.clickOperator("calculate");
        expect(calculator.displayValue.getAttribute("value")).toBe(expectedValue);
    });

    it('Verify multiplication', function() {
        var expectedValue = "8";
        
        calculator.clickNumberButton("4");
        calculator.clickOperator("multiply");
        calculator.clickNumberButton("2");
        calculator.clickOperator("calculate");
        expect(calculator.displayValue.getAttribute("value")).toBe(expectedValue);
    });

    it('Verify divison', function() {
        var expectedValue = "2";
        
        calculator.clickNumberButton("8");
        calculator.clickOperator("divide");
        calculator.clickNumberButton("4");
        calculator.clickOperator("calculate");
        expect(calculator.displayValue.getAttribute("value")).toBe(expectedValue);
    });
  });