module.exports = new Calculator();

function Calculator() {
    this.displayValue = element(by.id("display"));

    this.clickNumberButton = function(number){
        element(by.css("input[value='"+number+"']")).click();
    }

    this.clickOperator = function (operator){
        element(by.css("input[name='"+operator+"']")).click();
    }
}