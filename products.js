module.exports = new Products();

function Products() {
    this.productListTable = element(by.tagName("table"));
    
    /* this.productListTable=()=>{
        element(by.xpath("//table"));
    } */
}