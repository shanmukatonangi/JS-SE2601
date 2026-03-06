let num=10
let num2=10


// console.log(num == num2)


// let arr=[10]
// let arr2=[10]

// console.log(arr==arr2)

// let biodata={
//     name:"Joe",
//     age:21,
//     major:true,
//     hobbies:["cricket","tennis"],
//     address:{
//         hno:"11-11 john street",
//         postalcode:"541671",
//         appartment:{
//             name:"St Residency",
//             tower:12
//         }
//     }
// }

// console.log()
// console.error("error")


// let console={
//     log:"random info"
// }

// let cnsole={
//     log:"there is a code inside this log which is used to print answers"
// }



// console.log(biodata)
//print any specific in aobject we have to use object notation

// console.log(biodata['age'])

// console.log(biodata.age)
// console.log(biodata.major)
// console.log(biodata.hobbies[0])

// let details={
//     name:"john",
//     age:50
// }

// details.bloodgroup="O+ve"
// details.age=49

// console.log(details)

// let bloodgroup={
//     group:"O+ve"
// }

// console.log(Object.keys(details))
// console.log(Object.values(details))

// console.log(Object.entries(details))


// console.log(Object.assign(details,bloodgroup))

// let set=new Set([1,2,1,3])
// console.log(set)

// let set=new Set(["a","b","c"])

// set.add("d")
// // console.log(set.has('b'))

// set.delete("b")

// console.log(set)

// for(let i=0;i<set.size;i++){
//     console.log(set[i])
// }

// for(let alphabet of set){
//     console.log(alphabet)
// }

let shanmap=new Map([

    ['name','Joe'],
    ['age',20]


]
)
// console.log(shanmap.get('name'))
shanmap.set('gender','male')
shanmap.delete('age')
console.log(shanmap.has('gender'))


//Json

// let users=[
//     {name:"Ram"},{name:"kunal"},{name:"Shashi"}
// ]

// console.log(users[1].name)

let details={
    name:"Shan",
    age:50,

}

// {
//     "name":"Shan",
//     "age":50
// }


let jsondetails=JSON.stringify(details)
console.log(jsondetails)


let jsondetailstoobj=JSON.parse(jsondetails)
console.log(jsondetailstoobj)