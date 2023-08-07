const soppingCart = [
    {name: 'Shoe', price: 1200, quantity: 2},
    {name: 'Shirt', price: 2200, quantity: 5},
    {name: 'pant', price: 2200, quantity: 4},
    {name: 'Belt', price: 600, quantity: 3},
];

function totalCost(products){
    let sum=0;
    for(let i=0 ;i<products.length; i++){
        const product = products[i];
        sum = sum + (product.price * product.quantity);
    }
    return sum;
}

const expense = totalCost(soppingCart);
console.log(expense);
