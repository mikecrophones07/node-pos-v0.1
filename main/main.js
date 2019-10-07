module.exports = function main(input) {
    console.log("Debug Info");
    return printReceipt(input);
};


function printReceipt(input){
    const names = getNames(input);
    var totalSum = 0;
    var bodyReceipt = "";
    var footerReceipt = "";
    names.forEach(name => {
        var subTotal = getSubTotal(input, name);
        bodyReceipt = bodyReceipt.concat(
            'Name: ', name, 
            ', Quantity: ', getQuantity(input, name), 
            ', Unit price: ', getPrice(input, name), ' (yuan)', 
            ', Subtotal: ', subTotal.toFixed(2), ' (yuan)\n');
        totalSum = totalSum + subTotal;
    })

    

    footerReceipt = footerReceipt.concat(
        '----------------------\n', 
        'Total: ', totalSum.toFixed(2), ' (yuan)\n', 
        '**********************\n');

    return constructReciept(bodyReceipt, footerReceipt);
}

function constructReciept(bodyText, footerText){
    let introString = '***<store earning no money>Receipt ***\n';
    return introString.concat(bodyText, footerText);
}


function getNames(input){
    var names = new Set();
    input.forEach(element => {
        names.add(element.Name)
    });
    return names;
}

function getQuantity(input, name){
    var quantity = 0;
    var unit = null;
    input.forEach(element => {
        if(element.Name == name){
            quantity = quantity + 1;
            unit = element.Unit;
        }
    });

    if(unit == 'bottle'){
        return quantity + ' ' + unit + 's';
    }
    return quantity;
}

function getPrice(input, name){
    var price = 0;
    input.forEach(element => {
        if(element.Name == name){
            price = element.Price;
        }
    });
    return price.toFixed(2);
}

function getSubTotal(input, name){
    var subTotal = 0;
    input.forEach(element => {
        if(element.Name == name){
            subTotal = subTotal + element.Price;
        }
    });
    return subTotal;
}
