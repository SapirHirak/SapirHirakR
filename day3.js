const isVIP = false
let cash = 500
if (isVIP == true || cash >= 500)
    alert("great!")
else
    alert(":(")

const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if (d) {
    b = a
}

d = a + (b * c)
d++
b += 2
console.log(b)
console.log(c)
console.log(d)

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    if (currentYear - yearOfTeslaPurchase <= 4)
        console.log("upgrade?")
}
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let g = genes.slice(0, 2)
let s = genes[2]
genes[2] = genes[4]
genes[4] = s
let st = genes[3]
genes.splice(3, 1)

genes.push(st)
genes.push(st)

genes.unshift("FXT")
console.log(genes)

let p1 = {
    name: "sap",
    age: 21
    , city: "rlz"
}
let p2 = {
    name: "daniel"
    , age: 22
    , city: "holon"
}

if (p1.age == p2.age && p1.city == p2.city)
    console.log("yeah!")
else
    console.log("no...")

let myList = [p1, p2]
myList[0].name = "sapirHirak"
myList.splice(1)

let book1 = { title: "sapsap", author: "SapirHirak" }
let book2 = { title: "The Daniel", author: "SapirHirak" }
let libery = { books: [book1, book2] }

myList.push(libery.books)

//Ex5
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation').toLowerCase()
  if(name in reservations)
  {
        console.log('Welcome!')
        if(reservations[name].claimed == false)
        console.log('there is nothing') 
        if (reservations[name.claimed])
            console.log('there is someone already') 
  }
  //Ex5.1
if (!(name in reservations))
    reservations[name]= {claimed: true}




