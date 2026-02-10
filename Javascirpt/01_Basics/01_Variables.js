const accountId = 122323;
let accountEmail = "aditya123@gmail.com"
var accountPassword = "123455"
accountCity = "Bareilly"
let accountState;
// accountId = 2 ; not allowed 
accountEmail ="hc@gmail.com"
accountPassword = "22123123";
accountCity = "Delhi"
console.log(accountId);
/* 
Prefer not to use var 
because of issue in block scope and functional Scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
