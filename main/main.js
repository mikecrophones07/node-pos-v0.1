module.exports = function main(input) {
    console.log("Debug Info");
    return printReceipt(input);
};


function printReceipt(input){
    var names = getNames(input);
    var totalSum = 0;
    let introString = '***<store earning no money>Receipt ***\n';
    var finalResult = introString;
    names.forEach(name => {
        var subTotal = getSubTotal(input, name);
        finalResult = finalResult.concat('Name: ', name, ', Quantity: ', getQuantity(input, name), ', Unit price: ', getPrice(input, name), ' (yuan), SubTotal: ', subTotal.toFixed(2), ' (yuan)\n');
        totalSum = totalSum + subTotal;

    })

    finalResult = finalResult.concat('----------------------\n', 'Total: ', totalSum.toFixed(2), ' (yuan)\n', '**********************\n');
    return finalResult;
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
