// console.log("omo pedro")

//alert('hello world')


let cake = "Strawberry"
const balance = 2000

let withdrawal = 1500


const newBalance = balance - withdrawal
console.log("We are done here \nLet's go home")

console.log("Our new balance is:", balance)
//String
//Number
//new
//return
//Date
//Object
//

// const happy = confirm("Are you happy?")
// console.log(happy)

// if(happy){
//     console.log("I am happy")
// }else{
//     console.log("I am not happy")
// }


// const username = prompt("What is your name?")

// if(username === "Betty"){
//     console.log("Welcome Betty")
// }else if(username === "Tobi"){
//     console.log("Welcome Tobi")
// }else{
//     console.log("Invalid username")
// }

// const age = parseInt(prompt("How old are you?"))

// if(age>=18){
//     console.log('Welcome to the bar')
// }else{
//     console.log('You are not allowed in')
// }


function greetings(user = "Zikas") {
    console.log("welcome", user)
}
greetings("Solomon")
greetings("Zainab")
greetings()

function add(num, boo = 1) {
    return num * boo
}
console.log(add(7, 3))

// const age = parseInt(prompt("Input your age:"))

// if(age >= 36 && age <=40){
//     console.log("It's time to get your shit together")
// }else if(age >=30 && age<=35 ){
//     console.log("You done enough on the streets, settle down")
// } else if(age>=25 && age <= 29){
//     console.log("Nt a bad time to consider settling")
// }else if(age>=18 && age<=24){
//     console.log("focus")
// }else if(age>40){
//     console.log("You should have your kids now")
// }else{
//     console.log("ineligible age range")
// }


// const pizza = prompt(
//     "Please select your preference\n 1.Small Pizza\n 2.Medium \n 3. Large Size\n 4. Family size"
// )

// switch (pizza) {
//     case "1":
//         confirm("You've chosen small pizza")
//         break
//     case "2":
//         confirm("You've chosen Medium size pizza")
//         break
//     case "3":
//         confirm("You've chosen large size pizza")
//         break
//     case "4":
//         confirm("You've chosen family size pizza")
//         break
//     default:
//         alert("invalid input")
// }

const groceries = ["Milk", "Sugar", "Flour", "Garri", "Rice", "Beans"]

// console.log(groceries)

console.log("I will need buy " + groceries[0] + " and " + groceries[3])


console.log(groceries)

// groceries.push("Eggs")
// groceries.unshift("Fish")

// groceries.shift()
// groceries.pop()

groceries.splice(3, 0, "Honey", "Yeast", "Egg", "Salt")

console.log(groceries)

// const newGroceries = groceries.slice(2,4)

// console.log(newGroceries)

const bender = {
    name: "Zuko",
    age: "15",
    power: "Fire",
    nation: "Fire Nation",
}

console.log(bender.nation)

const bender2 = {
    name: "Aang",
    age: "12",
    power: ["Air", "Water", "Earth", "Fire"],
    nation: "Air Nation",
    fight: function () {
        return `I am ${this.name}I will fight for peace with my ${this.power[0]} power`
    }
}
console.log(bender2.fight())


console.log(bender2)

// for loop
// while loop
// do while loop
// for in loop
//for of
// let num = 0

// while (num < 100) {
//     console.log(`I will be a good boy ${num}`)
//     num++
// }

// do {
//     console.log("I am dancing")
//     num++
// } while (num < 110)

// for (let i = 0; i < 5; i++) {
//     console.log('Say hi')
// }

const someArr = ['weed', "Cannabis", 'Marijuana', "indian hem", "Crack"]

for( let i = 0; i<someArr.length; i++){
    console.log(`${someArr[i]} is a hard drug`)
}

for(let i = 0; i<=10; i++){
    if(i%2===0){
        console.log(`${i} is even`)
    }else{
        console.log(`${i} is odd`)

    }
}

const arr = []


// while (arr.length < 5){
//     const item = prompt("Enter a array item")
    // write your code here
//     arr.push(item)


// }

// console.log(arr)

// for(i in arr){
//     console.log('YOU HAVE ENTERED',arr[i])
// }

// const plenty = [23, 45, 32, 56, 91, 80, 75]

// let sum = 0

// for(let value of plenty){
//     sum+=value
//     //sum = sum+value
// }
// console.log(sum)

// getElementsTagName
//getElementsByClassName
//getElementById
//querySelector
//querySelectAll


btn.addEventListener("click", ()=>{
    alert("User's Profile not available yet")

})