const user = {
    username:'Hitesh',
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log(`Username is ${this.username} and login count is ${this.loginCount}`);
    }
}

// console.log(user.username);
// user.getUserDetails();


function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;  
    this.getUserDetails = function(){
        console.log(`Username is ${this.username} and login count is ${this.loginCount}`);
    }   
}
const user1 = new User();
user1.username = 'Hitesh';
user1.loginCount = 8;
user1.signedIn = true;
user1.getUserDetails(); 
console.log(user1)

const User2 = new User('Aditya',5,false);
User2.getUserDetails();
console.log(User2)