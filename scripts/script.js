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
// let fruits = ["Apple", "Banana"];
// let newfruits = fruits.push("Orange");
// console.log(newfruits)
// let poppedfruit = fruits.pop();
// console.log(poppedfruit)
// fruits.unshift("Mango");
// fruits.shift()

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// };

// for (let item of fruits){
//     console.log(item)
// };


// const person = {
//     name:['Bob', "Smith"],
//     age:32,
//     gender:"male",
//     interests: ["Music", "Skiing"]
// }

// console.log(`My name is ${person.name[0]} ${person.name[1]}. I am ${person.age} 
// years old. I am into ${person.interests[0]} and ${person.interests[1]}`)

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];

for (let student of students){
    if (student.program === "CIT" && student.GPA > 3){
        console.log(student)
    }
}