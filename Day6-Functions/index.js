// let num=10
// let num2=10

// let add=num+num2

// console.log(add)

// let num3=90
// let num4=100
// let add2=num3+num4
// console.log(add2)

// let num5=2878
// let num6=38778

// function Addition(){
// let n1=10
// let n2=10
// console.log(n1+n2)


// }


// Addition()






// function Sayhello(){

// console.log("hello1")


// }



// console.log("hello2")

// Sayhello()

function Addition(num,num2){
   

   let add=num+num2

   console.log(add)
}

Addition(10,20)

Addition(30,78)

Addition(38256872,7425875872)

// console.log("Hi Ansar")
// console.log("Hi Ram")
// console.log("hi kunal")

// function Greet(name){
//     let message="Hello"+name
//     console.log(message)
// }

// Greet("Shashi")
// Greet("Janhavi")

// function RandomFun(){
//     console.log("hello")
// }


// let name="Shanmukh"

// if(1==1){
//     let cricket="India"
//     console.log(cricket)
//     console.log(name)
// }

// console.log(cricket)

// function Randomfun(){
//     console.log(name)
// }
// Randomfun()

// console.log(name)



// function Randomfun(){
//     let team="India"
//     console.log("Function triggered")
//     // console.log(team)
//     return team
// }




// console.log(Randomfun())

// function Basic(){
//     return "Hello Basic"
// }

// // Basic()="Hello Basic"

// console.log(Basic())

// function Num(num){
//     return num
// }

// console.log(Num(10))


// function Num(n1){
//     console.log(n1)
//     return n1+n1
// }

// console.log(Num(25))


// function Even(num){
//     return num%2==0
// }

// console.log(Even(10))


// function Hello(){
//     return "Hello "
// }

// // Hello()="Hello"

// function Greet(name,name2){
//     console.log(Hello()+name+name2)
// }

// Greet("Ram","shashi")


let arr=[1,2,3,4,5]
let evenarr=[]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      evenarr.push(arr[i])
    }
}

console.log(evenarr)

function Iseven(num){
   return num%2==0
}

function Evennums(arraynums){
    let evennumbers=[]
    for(let i=0;i<arraynums.length;i++){
        if(Iseven(arraynums[i])){
           evennumbers.push(arraynums[i]) 
        }
    }

    return evennumbers

}

console.log(Evennums([1,2,3,4,5]))