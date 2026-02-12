//singleton
//object.create

//object literals

const mySym = Symbol("Key1")


const JsUser = {
    name:"Aditya",
    "full name":"Aditya Srivastava",
    [mySym]:"myKey1",
    age:22,
    location:"Delhi",
    email:"aditya@google.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email="Aditya8383@google.com"
// console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email="Aditya3343@google.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("HEllo js User");
}
JsUser.greeting2 = function(){
    console.log(`HEllo js User ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())
