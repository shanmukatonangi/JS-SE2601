function calculateTotal(cart) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

// // Do not modify the below lines
// module.exports = { calculateTotal };

function CartTotal(cart){
    return cart.reduce((total,item)=> total+(item.price*item.quantity),0)
}
// let total=0
// function(total,item){
// return total+(item.price*item.quantity)
// }

//reduce(accumulator,current,initialvalue)



const cart = [
  { name: "Fruits", price: 10, quantity: 5 },
  { name: "Vegetables", price: 8, quantity: 3 },
  { name: "Dairy", price: 5, quantity: 2 },
  { name: "Snacks", price: 3, quantity: 10 },
];

console.log(CartTotal(cart))
