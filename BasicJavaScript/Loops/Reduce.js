const myNums= [1,2,3]

// const myTotal= myNums.reduce(function(acc,currval ) {
//     console.log(`acc:${acc} and currval: ${currval}`);
    
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc,currval)=>{
    return acc+currval
},0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName:"js Course",
        price: 2999
    },
    {
        itemName:"python Course",
        price: 3999
    },
    {
        itemName:"data science Course",
        price: 12999
    }
]

const Total=shoppingCart.reduce((acc,item)=>{
    return acc+item.price
    
},0)
console.log(Total)