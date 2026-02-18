const promiseOne = new Promise(function(resolve,reject){
//do an async task
// DB calls,crytopgraphy,network
setTimeout(function(){
 console.log('Async task is complete')
 resolve()
},1000)
});

promiseOne.then(function(){
    console.log("Promise consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 is consumed ")
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh",password:'123'})
        }else{
            reject("error:something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
   console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("The promise is either resolve or rejected "))


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password:'123'})
        }else{
            reject("ERROR:JS went Wrong")
        }
    },1000)
})

async function consumePromiseFive(){
   try {
     const response= await promiseFive
   } catch (error) {
    console.log(error)
   }
}
consumePromiseFive();


// async function getAllUsers() {
//  try {
//     const respone = await fetch("https://jsonplaceholder.typicode.com/users")
//  const data = await respone.json()
//  console.log(data)
//  } catch (error) {
//     console.log(error)
//  }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))


