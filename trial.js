//Destructing

const vehicles = ["Ford","Mustang","Fiat"]
// const vehicle1 = vehicles[0]
// const vehicle2 = vehicles[1]
// const vehicle3 = vehicles[2]
// console.log(vehicle1)

const [,vehicle1,] = vehicles
// console.log(vehicle1)

let text=""

// vehicles.forEach(myFunction)
// function myFunction(i, index) 
// {text += index + ": " +i+ "\n";} 


// for (let i = 0; i < vehicles.length; i++)
// {text += i + ": " +vehicles[i]+ "\n";} 

// for (let i in vehicles) {
//     text += i + " : " + vehicles[i] +"\n"
// }


// for (let x of vehicles)
// {text += x + "\n";} 
// console.log(text)

// const person = {
//     name: "Mustafa",
//     age: 25,
//     location: "Ankara",
//     like: "Pizza"
// }
// const {name: name1, age, like} = person
// console.log(name1,age, like)

// const vehicleOne = {
//     brand: "Ford",
//     model: "Mustang",
//     type: "car",
//     year: 2023,
//     color:"red"
// }
// function myVehicle(vehicle){
//     const message = "My" + vehicle.type + " is a " + vehicle.color + " " + vehicle.brand + " " + vehicle.model + "."
//     console.log(message)
// }
// myVehicle(vehicleOne)

// function myVehicle({type,color,brand,model}){
//     const message = "My " + type + " is a " + color + " " + brand + " " + model + "."
//     console.log(message)

// }
// myVehicle(vehicleOne)


// spread operator

// const numberOne = [1,2,3]
// const numberTwo = [4,5,6]
// const numbersCombined = [...numberOne,...numberTwo,7,8]
// console.log(numbersCombined)

// const numbers = [1,2,3,4,5,6]
// const [a,b,...rest] = numbers
// console.log(rest)

const myVehicle = {
    brand: "ford",
    model: "mustang",
    color: "red"
}
const updateVehicle = {
    type: "car",
    year: 2023,
    color: "yellow"
}
const updated = {...myVehicle,...updateVehicle}
console.log(updated)


