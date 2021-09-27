module.exports = new Employees();

function Employees() {
    this.employeeLocationMap = element(by.id("map-employees-geochart")).element(by.tagName("svg"));
}