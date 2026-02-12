const user = {
    username:"Aditya",
    price:999,
   welcomeMessage:function(){
    console.log(`${this.username} , welcome to website`)
    console.log(this)
   }
}
// user.welcomeMessage();
// user.username="Sam"
// user.welcomeMessage();
// console.log(this)
// Brower ke andar jo global object woh hai window object 


// function chai(){
//     let username="Aditya"
//     console.log(this.username)// undefined 
// }
// chai()

// const chai = function (){
//     let username = "aditya"
//     console.log(this.username)
// }
const chai =  ()=>{
    let username = "aditya"
    console.log(this)
}

// chai()

// const addtwo = (num1, num2)=>{
//  return num1+num2
// }

// const addtwo = (num1, num2)=> num1+num2

// const addtwo = (num1, num2)=> (num1 + num2)
const addtwo = (num1, num2)=> ({username:"Aditya"})

// console.log(addtwo(3,4))

const myArray=[2,3,4,5,6]

// myArray.forEach(()=>{})