// function say(){
//     document.write("say hello ")
// }say()

// function user_data(user_name){
//     document.write("welcome"+" "+user_name)
// }user_data("khaled")

// function add(x,y){
//     return x+y
//     // ignored
//     // anything written after return is ignored
// }document.write(add(6,9))

//---------------------

// user first name/second name and hello

// let first_name = prompt("enter your first name:")
// let second_name = prompt("enter your second name:")

// function full_name(first_name,second_name){
//     return "welcome"+" "+first_name+" "+second_name
// }alert(full_name(first_name,second_name))

//--------------------------


// ****************CALCULATOR****************
// USING FUNCTION FFS

// let op = prompt("choose an operator (+ - * /):")
// let num1 = Number(prompt("enter the first number:"))
// let num2 = Number(prompt("enter the second number:"))

// function calc(num1,num2,op){
//     if(op=="+"){
//         return num1+num2
//     }
//     else if(op=="-"){
//         return num1 - num2
//     }
//     else if(op=="*"){
//         return num1*num2
//     }
//     else if(op=="/"){
//         return num1/num2
//     }
//     else{
//         alert("enter a valid operator")
//     }
// }alert(calc(num1,num2,op))

//----------------------

// instead of having 1k lets js make 1 let
// // let car_name  = "kia"
// // let car_model = "2010"
// // let car_color = "red"
// // function move(){
// //     document.write("the car is moving")
// // }move()

// let kia_car = {
//     car_name: "kia",
//     car_model:2010,
//     car_color:"red",
//     move: function(){
//         return "the car is moving"
//     }
// }
// console.log(kia_car)
// console.log("the car is"+" "+kia_car.car_name+" "+kia_car.car_color)
// console.log(kia_car.move())


//------------------

// // let user_name = {
// //     first_name:  "",
// //     second_name: "",
// //     full_name: function() {
// //         return "Hello"
// //     }
// // }
// // let first_name= alert("enter your first name:")
// // let second_name= alert("enter your second name:")
// // console.log("Hello"+" "+user_name.first_name+" "+user_name.second_name)


// let person = {
//     first_name:prompt("enter your first name"),
//     second_name:prompt("enter your second name"),
//     full_name: function(){
//         return "welcome"+" "+ this.first_name+" "+this.second_name
//     }
// }
// alert(person.full_name())

//--------------------------



