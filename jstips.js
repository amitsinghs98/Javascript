// use destructuring to extract the values from object

const user = {firstName:'amit',
lastName:'singh'};
const {firstName,lastName} = user; // we will use keys name to extract
console.log(lastName);
console.log(firstName);

// use console.log to log the arrays and objects 
// in both the object and array table will come with two cols : index in array 0,1,2.. and values
// in object it will come with index = as keys and values as assigned
const me={
    name: 'amit',
    age:24
};
console.table(me);
const tablearr = [362,32,4,2,3234];
console.table(tablearr); 

// we use string literals in order to print the string concatenation 

// we use optional chaining (?.) while working with the nested objects in order to avoid error 
const user1={
    detailsUser:{
        myName: 'usernamee',
        detailsName:{
            firstName:'amit',
            lastName: 'singh'
        }
    }
}

console.log(user1.detailsUser?.age1); // if conditions didn't match it will show the 'undefined' instead of error

// to merge,clone,update any array or objects use the ...spread operator 
const arr1= [234.42,24,2,3,2] ;

const obj1 = {a:12,my:24, newobj:{let:'me'}}
const merge1 = {...obj1, ...arr1}; // we can merge array with objects
console.log(merge1);

const array1 = [1,2,3,4,5,6,66,7];
array1.filter(num => console.log(num%2 ===0() )).map(num=> console.table(num*num));
