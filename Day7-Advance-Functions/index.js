
// function Random(){
//     let a=12
// console.log(a)
// }



// let b=20
// console.log(b)

// Random()

//Stack
// function Hello(){
//     Greet()
//     console.log("Hello")
// }

// function Greet(){
//     console.log("Good Evening")
// }

// Hello()


// function Orderplaced(){
//     console.log("Order placed")
//     console.log("Order fun is done ")
// }

// function Proccesspayment(){
//  console.log("Payment proccessing")
//  console.log("payment done")
//  Orderplaced()
//  console.log("proccess fun is done ")
// }

// function Checkout(){
//     console.log("Checkout Proccess Started")
//     console.log("checkout done")
//     Proccesspayment()
//     console.log("chekckotut fun is done ")
// }

// Checkout()


// function test(){
  
//     test()
// }

// test()

// console.log(a)
// let a=10
// console.log(username)
// const username="Shan"
//Stack Overflow
// Hello()
// function Hello(){
//     console.log("Hello")
// }

//Lexical Scope

// if(1==1){
//     let a=10
//     if(2==2){
//         let b=20
//         console.log(a)
//         if(true){
//             console.log(a)
//         }
//     }
//     console.log(b)
// }

// console.log(a)



// function Outer(){
//     let a=10;
//     function Inner(){
//         console.log(a)
//     }

//     Inner()
// }

// Outer()

// console.log(a)
// jgfkjgkghgjhg

//Closure
function outer(){
    let a=0
    function inner(){
        a=a+1
        console.log(a)
    }
    return inner()
}

outer()
