// let nums=[1,56,70,89,2,4]

// let details=["shanmukh","praveen",100,true,[1,2]]

// let names=["ram","shashi","kunal","janhavi"]

// let numbers=new Array(10)

// console.log(numbers)

// let fruits=["apple","mango","banana"]
//adding elements into an array 2 methods- push(),unshift()
// fruits.push("grapes") adds element at the end

// fruits.unshift("grapes") adds element at the start


//To replace already existing

// fruits[1]="Grapes"
// console.log(fruits)

// fruits.pop() to remove last element
// fruits.shift()
// console.log(fruits)

let fruits=["apple","mango","banana","grapes","kiwi"]
//splice to delete
// fruits.splice(1,2)
//fruits.splice(index of element,no.of elements to be deleted)

//splice to add at any positions

// fruits.splice(2,0,"Strawberries")//adding an element at 2 index
// fruits.splice(2,1,"Strawberries")//we are deleting 2nd index element and adding strawberied

// console.log(fruits)

// console.log(fruits.length)

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }

// let names=[10,"shanmukh",true,0.11,[1,2]]

// for(let i=0; i<names.length; i++){
//     console.log(names[i])
// }

// let months=["Jan","Feb","Mar","Apr"]
// if(months.includes("Mar")){
//     console.log("Yes it is present")

// }else{
//     console.log("NO")
// }

// let twodarray=[[1,2,3],[4,5,6],[7,8,9]]
// console.log(twodarray[1][1])


// let students=[["john","joe"],["jake","fred"]]

// let nums=[
//           [1,2,[1,2]],
//           [2,3]
//         ]

// let arr=[[1,2],[2,4]]
// arr.push([5,6])
// console.log(arr)
// arr[1].push(7)
// console.log(arr)


let str1="shanmukh"
// let str2='shanmukh'
// let str3=`shanmukh`

// console.log(str1[6])
// console.log(str1.charAt(5))
// str1[4]="M" strings are immutable
// console.log(str1)

// console.log(str1.toUpperCase())

// let smallstr=str1.slice(2,5)

let replaced=str1.replace("a","e")
console.log(replaced)

// console.log(smallstr)

