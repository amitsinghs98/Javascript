// why promises?
// before promises, js used callbacks for aysnc tasks
//however, callbacks could lead to nested and hard to read code, such as callback hells
//promises offfers a cleaner and manageable way to handle async task s

// promises can end in three ways; (like requesting data from server)
// fullfilled, rejected, pending 
// used in fetching data from api
//timer or delay functions
// reading files in node js 
//any task that don't complete immediatrly 

//creating promises 
//let promise = new Promise (function(resolve, reject));
//if (task successfull){
    // resolve(result)
// }
// else{
// reject(error);
//} });


// handling promises 
/* 
promise
.then(function(result){

})
.catch(function(error){

})
*/