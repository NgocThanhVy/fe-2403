// const product = {
//     id: 1,
//     productName: 'laptop abc',
//     productType: 'px',
//     price: 1000,
//     quantity: 5,

// }

// const {id: productId, productType, price, quantity} = product;
// console.log(`productId: ${productId}`)
// console.log(`productType: ${productType}`)
// console.log(`price: ${price}`)
// console.log(`quantity: ${quantity}`)

// const myArr = ['a', 'b', 'c', 'd']

// // const firstItem = myArr[0]

// // const secondItem = myArr[1]

// // const thirdItem = myArr[2]

// // const fourthItem = myArr[3]

// const [firstItem, secondItem, thirdItem, fourthItem] = myArr

// console.log(`first item: `, firstItem)

// console.log(`second item: `, secondItem)

// console.log(`third item: `, thirdItem)

// console.log(`fourth item: `, fourthItem)

// const person = {

//     fullName: 'anson ngo',

//     age: 50,

//     // 50 props

// }

// const car = {

//     id: 1,

//     carName: 'bmw'

// }

// const house = {

//     location: 'hanoi',

//     price: 1_000_000_000

// }

// const myCar = {

//     fullName: person.fullName,

//     age: person.age,

//     id: car.id,

//     carName: car.carName

//     // 50 more props

// }

// const myCar = {

//     ...person,

//     ...car,

//     ...house

// }

// console.log(myCar)

// const arr1 = [1,2,3,4]

// const arr2 = [5,6,7,8]

// const arr12 = [

//     ...arr1,

//     ...arr2

// ]

// console.log(arr12)  // [1,2,3,4,5,6,7,8]

const intr = () => console.log("hello world!");

intr();


const sum = (a, b) => {
    return a + b;
}

console.log(sum(9, 9));
const product = {
    id: 01,
    productName: 'John Smith',
    productType: 'pc',
    price: 10000,
    quality: 5,

}

const { id, productName, productType, price, quality } = product

console.log(`id: ${id}`)
console.log(`productName: ${productName}`)
console.log(`productType: ${productType}`)
console.log(`price: ${price}`)
console.log(`quality: ${quality}`)

const array = ["a", 'b', 'c', 'd']

const [first, second, third, fouth] = array;

console.log(`first`, first)
console.log(`second`, second)
console.log(`third`, third)
console.log(`fouth`, fouth)

const car = {
    id: 1,
    name: "bmw"
}

const person = {
    myName: "Ngoc",
    age: 20
}

const myCar = {
    ...car,
    ...person
}

console.log("myCar:", myCar)