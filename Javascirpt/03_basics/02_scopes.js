// var c = 300
let a = 300

if(true){
let a = 10
const b = 20 
// var c = 30
// console.log("Inner: ",a);
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username="Aditya"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const username = "aditya"
    if(username === "aditya"){
        const website = "youtube"
        // console.log(username+website)
    }
    // console.log(website);
}
// console.log(username)
console.log(addone(3))
 function addone(num){
    return num +1;
 }
 

 console.log(addTwo(5))
 const addTwo = function(num){
    return num+2;
 }
 