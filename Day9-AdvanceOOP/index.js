// let info={
//     username:"Shanmukh",
//     details:function(){
//         console.log("123")
//     }

// const { createContext } = require("react")

// }
// let infoname=info.username
// console.log(infoname)

// let detailsfun=info.details

// detailsfun()

// let detailsfun=function(){
//         console.log("123")
//     }

// detailsfun()








// let info={
//     username:"Shanmukh",
//     details:function(){
//         console.log(this)
//     }

// }

// let infodetails=info.details

// let infodetails=function(){
//         console.log(this)
//     }



// infodetails()



// function Normal(){
//     console.log(this)
// }
// Normal()


//this keyword cons
// let cricket={
//     player1:"Virat KOhli",
//     player2:"Rohit Sharma",
//     format:function(){
//         console.log("odi")
//         console.log(this.player1)
//     }
// }
// let cric

// let p1=cricket.player1

// console.log(p1)

// let cricketformat=cricket.format
// cricket.format()
// cricketformat()
// cricket.format()

// let cricformat=cricket.format

// let crickformt=function(){
//         console.log("odi")
//         console.log(this.player1)
//     }


// cricformat()

//bind
//newfunction=oldfunction.bind(parent)//it gives real values to the this keyowrd

// let cricket={
//     player1:"Virat KOhli",
//     player2:"Rohit Sharma",
//     format:function(){
//         console.log("odi")
//         console.log(this.player1)
//     }
// }

// let cricfor=cricket.format.bind(cricket)
// cricfor()

// let car={
//     brand:"BMW",
//     Info:function(){
//         console.log("this car is a"+this.brand)
//     }
// }

// car.Info()
// let carinfo=car.Info.bind(car)

// let careinfo=function(){
//         console.log("this car is a"+this.brand)
//     }



// carinfo()


let user={
    fullname:"Shanmukh"
}


function Name(){
    console.log(this.fullname)
}

// let namefun=Name.bind(user)
// namefun()

// function namefun(){
//     consolelog(user.fullname)
// }
// let namefun=Name.bind(user)
// namefun()

// let user2={
//     name:"Praveen"
// }

// function Name2(){
//     console.log(this.name)
// }

// let name2=Name2.bind(user2)
// name2()
// let name2=Name2.bind(user2)
// name2()
// function(){
//     console.log(user2.name)
// }


// Name2.call(user2)

// function Name2(){
//     console.log(user2.name)
// }
// let details={
//     username:"SHanmukh"
// }

// function introduce(age,city){
//     console.log("hello im "+this.username+age+" "+city)
// }

// introduce.call(details,50,"hyderabad")

//apply

let details={
    username:"Shanmukh"
}
let details2={
    username:"Praveen"
}

function greet(age,city){
    console.log("hello im "+this.username+age+" from "+city)
}


greet.call(details,50,"hyderabad")
greet.apply(details2,[45,"Delhi"])//hello im Praveen 45 from Delhi