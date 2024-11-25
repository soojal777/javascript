//stack(primitive datatypes),
// let a = 67
// b = a
// b = 5
// console.log(a);
// console.log(b);

// heap(non-primitive datatypes)
// let obj = {
//     name:"Soojal"
// }
// console.log(obj.name);
// let dup = obj;
// dup.name = "Chad"
// console.log(obj.name);

//using string interpolation and placeholder
// let age = 40
// let name = "ramu"
// let str = `name is ${name.toUpperCase()} and age is ${age}`
// console.log(str);

//better way for string
// let temp = new String('hello world')
// console.log(temp.length);
// console.log(temp.indexOf('o'));

//str.trim()
//slice vs splice
// let arr = [1, 2, 3, 4, 5];
// let spliced = arr.splice(1, 2); // Removes 2 elements starting from index 1

// console.log(spliced); // [2, 3]
// console.log(arr);     // [1, 4, 5] (modified)

// let url = 'https://soojal%20.com'
// console.log(url.replace('%20','-'));
// console.log(url.includes('sooj'));
// const str = 'hiteshhc';
// console.log(str.slice(-8, 4));

// const str = "apple,banana,cherry";
// const result = str.split(",");
// console.log(result); // ["apple", "banana", "cherry"]

// const str = "a,b,c,d,e";
// const result = str.split(",", 3);
// console.log(result); // ["a", "b", "c"]

// const str = "one1two2three3";
// const result = str.split(/\d/); // Split by digits
// console.log(result); // ["one", "two", "three", ""]

// const num = new Number(37.27367)
// console.log(num.toString().length);
// console.log(num.toFixed(2));
// console.log(num.toPrecision(1));

// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));

//Number.MAX_VALUE
//Maths
// console.log(Math.abs(-19));
// console.log(Math.round(19.5023));
// console.log(Math.ceil(19.45023));
// console.log(Math.floor(19.45023));
// console.log(Math.sqrt(56));
// console.log(Math.min(56,3,6,8));

const min = 10, max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);

