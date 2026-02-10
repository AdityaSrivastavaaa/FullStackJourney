// Primitive 

// 7 types : String , Number , Boolean , null, undefined , symbol ,BigInt

// Reference 

// Array , objects , Functions 





// *************************************************

// Stack(Primitive) Heap(Non-Primitive)

let myYoutubeName = "MountainMosaic"

let anothername = myYoutubeName;
anothername="chaiaurcode"

// console.log(myYoutubeName)
// console.log(anothername)

let user1 = {
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 = user1;


user2.email = "admin@google.com"

console.log(user1);
console.log(user2);