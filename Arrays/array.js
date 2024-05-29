// 1. toString () method; array converted to the string and seperated by commas 
//// no parameters passed
// it won't change the og array 
const arraymy = [1.4,4,3,2,54,66,47,8,6];
const arr=[232342]

// console.log(arraymy.toString());
// console.log(arraymy);

/////////////////////////////////

// 2. join(seperator) method ; return the array as string 
// any seprator can be specified , inside parameter and the default seperator is (,)comma
// it wont change og array 
const arr1=[2,34,42,34,'amit','singh'];
// console.log(arr1.join(' this is it '));

///////////////////////////////////

//3.  pop(); method; removes the last element from an array 
// returns the removed element 
// it will change the og array ; the og array will be left without popped element 
const arraypop = [133,324,5,322,'banana','apple'];
// console.log(arraypop.pop());
// console.log(arraypop);

// The removed element from the array; undefined if the array is empty.
// pop on non array elements - object 
const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
  };
//   console.log(Array.prototype.pop.call(arrayLike)); // we use  Array.prototype and then method name is order to 
  // apply on objects with the call method to access the object.

  ///////////////////////////

  // 4. push(); // add elements in the end of the array 
  // return new length of array 
  // yes it changes the neew array 
  const arrpush = [23.43,323.43,24334,4];
  
  let objj = {
    done:'amit'
  }
//   console.log(arrpush)
//   console.log('length',arrpush.push()); // returns the length start with 1,2.. and we can pass the array or object inside push 
  //obj and arr will be considered only 1 in length  
//   console.log(arrpush)
// it requires one parameter else it will print the length of array which is original length

  //note we can merge array and obj both same with ...

/////////////////
// push method appends value in array and adds in the end of array
// it returns the new length of array 
// we can pass multiple parameters (value1, value2, value n...)
const pusha = [];
const arrpus = [2,4,3,23,4,2,,5,7,24,64]
arrpus.forEach((elements) => {
    if(elements % 2 === 0)
 pusha.push(elements)
//  console.log(pusha) // it will print each time it iterates

});
console.log(pusha) // prints overall final details pushed 


const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];
const inNew =[];

// Merge the second array into the first one
vegetables.push(...moreVegs);
console.log(vegetables);
inNew.push(...vegetables,...moreVegs);
console.log(inNew);
console.log(vegetables);


// 5. shift(); removes 1st element from starting of array 
// returns the removed element 
// it changes the original array, we should use in moderate as it affects the indexing of whole

const arrshift = [12,22,1,3,31,1]
const sh = arrshift.shift(elem => elem > 10)
console.log(arrshift,sh)