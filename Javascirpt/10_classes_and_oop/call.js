function SetUserName(username){
    this.username = username;

}

function  creatteUser(username,email,password){
    SetUserName.call(this,username);
    this.email = email;
    this.password = password;
}

const chai = new creatteUser("chai", "chai@gmail.com", "123456");
console.log(chai);