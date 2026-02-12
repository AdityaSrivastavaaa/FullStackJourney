// array

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);

const myHeors =["Thor","Ironman"]
// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(8))
// console.log(myArr.indexOf(9))
// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)

//slice , splice 
console.log("A", myArr);

const myn1 = myArr.slice(1,3)//does not change original array 
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3);// changes the original array
console.log(myn2);
console.log("c", myArr)

