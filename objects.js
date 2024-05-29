/*
object methods 
1. Object.freeze it prevents any changes passed to object 
const data = {
    name:'amit'
};
Object.freeze(data);
data.name
// const data = {
//     name:'amit',
//     more:{
//         details:'nomore'
//     }
// };
// data.name = 'singh';

// Object.freeze(data);

// data.more.details = 'yes';
// console.log(data);

// here we see that object.freeze can't work on nested object bcz it can still channge the object deep inside

//2. Object.keys // returns all the keys of object inform of array
const obj1 = {
    key1:'amit',
    key2: 'singh'
};
const keyss = Object.keys(obj1);
// console.log(keyss.toString()); // converts obj to string

// console.log(values);

console.log(values[1])

// 3. Object.values // returns all the values in formof array
const values = Object.values(obj1);

// 4. Object.entries // returns both keys and values in form of array 
const data1={
    me:'sss',
    me1:'ss2'
};
const entries = Object.entries(data1);
console.log(entries);
*/
const data1={
    me:'sss',
    me1:'ss2'
};
const entries = Object.entries(data1);
console.log(entries.toString().charAt(7).includes('m'));

//
