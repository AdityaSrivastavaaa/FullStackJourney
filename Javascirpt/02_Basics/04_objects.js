const tinderUser = new Object()

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = "false"
// console.log(tinderUser)
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"srivastava"

        }
    }
}
// console.log(regularUser.fullname.userfullname)

const obj1={
    1:"a",2:"b"
}
const obj2={
    3:"c",2:"d"
}

// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3={...obj1,...obj2}
// console.log(obj3)

const users = [
    {
       id:1,
       email:"a234@gmail.com"
    },
    {
       id:2,
       email:"a234@gmail.com"
    },
    {
       id:3,
       email:"a234@gmail.com"
    },

]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedfalse'))


const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:'hitesh'
}

//course.courseInstructor

const {courseInstructor:instructor} = course

console.log(courseInstructor)
console.log(instructor)

// APi

// {
//     "name":"hitesh",
//     "cousename":"Js in hindi",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {},
// ]
