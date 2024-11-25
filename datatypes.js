//primitive

// 7 type: String, Number, Boolean, null, undefined, Symbol, BigInt
// const id = Symbol(145);
// const secondId = Symbol(145);//makes values unique
// console.log(id === secondId)
// const bigNum = 37126976387672362832364n;
// console.log(bigNum);


//reference type

//array, objects, functions, 
// const arr = ["aa","sf",56]
// let obj = {
//     name:"Soojal",
//     age:20
// }
let fun = function(a,b){
    console.log(a+b);
}
// fun(6,7);
console.log(typeof fun);//function
// console.log(typeof xyz);//undefined
// console.log(typeof null);//object

//obj?.name -> optional chaining
//singleton -> const obj = new Object();
//not-singleton -> const obj = {}
//spread -> const a3 = [...a1 , ...a2]

// const target = {a: 1, b: 2}
// const source = {b:5, c:7}
//merge two objects - >
// const obj3 = Object.assign({},target,source);
// const obj3 = {...target, ...source};
// console.log(obj3);

// console.log(Object.keys(tinder)); -> all keys stored in an arrray
// console.log(Object.values(tinder)); -> all values stored in an arrray
// console.log(Object.entries(tinder)); -> all values stored in an arrray

// console.log(tinder.hasOwnProperty('age')); //key exists

//destructure
// const dish = {ingr : "paav"}
// console.log(dish.ingr);
// const {ingr} = dish
// console.log(ingr);
// const {ingr : samagri} = dish
// console.log(samagri);







