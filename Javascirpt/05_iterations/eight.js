const myNums = [1,2,3]

const myTotal =myNums.reduce((acc,currval)=>{
    console.log(`acc : ${acc} and currval : ${currval}`)
    return acc + currval
},0)
// console.log(myTotal)

const shoppingCart=[
    {
        itemName:"Js Course",
        price:2999
    },
    {
        itemName:"Python Course",
        price:999
    },
    {
        itemName:"Mobile Dev Course",
        price:4999
    },
    {
        itemName:"Data Science Course",
        price:2999
    },
]

const priceToPay =shoppingCart.reduce((acc,item)=>(acc+item.price),0)

console.log(priceToPay)