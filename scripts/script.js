// console.log("hello")

// for (let i = 1; i<=10; i++){
//     console.log(2**i)
// }

// let pwr = 1
// while (pwr<=10){
//     console.log(2**pwr)
//     pwr += 1
// }

// do {

// }

// // while()
// let user_name
// do{
//     user_name = prompt("what is your name")
// }
// while (isNaN(Number(user_name)) != true)

// console.log(user_name)
// alert("Hello " + user_name)
// alert(`Hello ${user_name}`)
let fruits = ["Apple", "Banana"];
let newfruits = fruits.push("Orange");
// console.log(newfruits)
// let poppedfruit = fruits.pop();
// console.log(poppedfruit)
fruits.unshift("Mango");
// fruits.shift()

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
};

for (let item of fruits){
    console.log(item)
};


const person = {
    name:['Bob', "Smith"],
    age:32,
    gender:"male",
    interests: ["Music", "Skiing"]
}

console.log(`My name is ${person.name[0]} ${person.name[1]}. I am ${person.age} 
years old. I am into ${person.interests[0]} and ${person.interests[1]}`)