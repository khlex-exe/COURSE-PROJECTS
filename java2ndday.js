// let day = prompt("enter a number")
// if(day==1){
//     alert("saturday")
// }
// else if(day==2){
//     alert("sundayd")
// }
// else if(day==3){
//     alert("monday")
// }
// else if(day==4){
//     alert("tuesday")
// }
// else if(day==5){
//     alert("wednesday")
// }
// else if(day==6){
//     alert("thursday")
// }
// else if(day==7){
//     alert("firday")
// }
// else{
//     alert("enter a valid number")
// }

// ---------------------

// SWITCHHH 
// let day = Number(prompt("enter a number for a day"))
// switch(day){
//     case 1:
//     alert("saturday")
//     break;

//     case 2:
//     alert("sunday")
//     break;
//     case 3:
//     alert("monday")
//     break;
//     case 4:
//     alert("tuesday")
//     break;
//     case 5:
//     alert("wednesday")
//     break;
//     case 6:
//     alert("thursday")
//     break;
//     case 7:
//     alert("friday")
//     default:
//         alert("enter valid numbers")
//     break;
// }



// -----------------------

// FOR LOOPS

// for(let i=0;i<=10;i++){
//     document.write( i+"<br>")
// }

// ------------

// // even/odd numbers

// for(i=0;i<=10;i+=2){
//     document.write( i + "<br>")
// }

// for(i=1;i<=10;i+=2){
//     document.write( i + "<br>")
// }

// document.write("<hr>")

// // --------------        
// document.write("even numbers:")
// document.write("<br>")
// for(i=0;i<=10;i++){
//     if(i%2==0){
//         document.write(i +'<br>')
//     }

// }
// document.write("odd numbers:")
// document.write("<br>")
// for(i=0;i<=10;i++){
//     if(i%2==1){
//         document.write(i +'<br>')
//     }
    
// }


// ------------------

// WHILE LOOPS
// let x = 0;
// while(x<=10){
//     document.write(x + "<br>")
//     x++
// }

// document.write("<hr>")

// // do while

// let y=0
// do{
//     document.write(y+"<br>")
//     y++
// }while(y<=10)

// ------------



// ***************CALCULATOR***************
// let op = prompt("enter your operator (+ - / *):")
// let num1 = Number(prompt("enter your 1st nummber"))
// let num2 = Number(prompt("enter your 2nd nummber"))

// USING SWITCH 

// switch(op){
//     case '+' :
//         alert(num1 + num2)
//         break;
//     case '-' :
//         alert(num1 - num2)
//         break;
//     case '*' :
//         alert(num1 * num2)
//         break;
//     case '/' :
//         alert(num1 / num2)
//         break;
//      default:
//       alert("choose a valid operator")
// }



// USING IF STATEMENT 

// if(op=='*'){
//     alert(num1 * num2)
// }
// else if(op=='+'){
//     alert(num1 + num2)
// }
// else if(op=='-'){
//     alert(num1 - num2)
// }
// else if(op=='/'){
//     alert(num1 / num2)
// }
// else{
//     alert("choose a valid operator")
// }

// --------------------
// ARRAYS //
// let arr = [8 , 9,"hello",true,[8,9,3]]
// // console.log(arr)
// // console.log(arr.length)
// // console.log(arr[4][2])
// // if you want to view a string from 
// // inside an array inside 
// // another array just do this line of code 

// for(let index=0;index< arr.length;index++){
//     document.write(arr[index]+ "<br>")
// }

// ----------------------


console.log(Math.random())
console.log(Math.pow(5,3))
console.log(Math.max(90,20,60))
console.log(Math.min(90,20,60))

console.log(Math.abs(-1))
console.log(Math.round(0.512))// normal round 
console.log(Math.ceil(0.512)) //rounds up
console.log(Math.floor(0.512))//rounds down
