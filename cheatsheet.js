/* 
const, let, var keywords to create variables
variable name = value

js primitives:
string, number, boolean, undefined, null
*/

let aString = "this is a string";
// strings are always in quotation marks '', "" single line string, `` multiline string

let = aNumber = 1;
// numbers cannot be in quotation marks, otherwise it's a string

let aBoolean = false;
// cannot be in quotation marks either

let = anUndefined = undefined;
// cannot be in quotation marks either

let aNull = null;
// cannot be in quotation marks either

let notANumber = NaN;
// oh but yes, it's a number

console.log(typeof aString)
// the variable name must be the exact same

console.log(typeof anUndefined)

console.log(typeof aNull)
// null is an object and a primitive at the same time, does not have a prototype

console.log(typeof notANumber)


console.log(aFunction1())
// this is how the function runs

function aFunction1() {
    // this is the inside of the function
    
    // the function will return whether we define it or not, if not the return value will be undefined
    
    return "this is a function"
}

const aFunction2 = function() {
    // a function is a first class citizen, you can do anything with a function, you can with an object or a primitive

    // every value saved in a variable can be accessed after it's variable = value line

    // we can access the value of our variable aFunction2, if we use the console.log after we created the variable 
    
    return "this is another function"
}

console.log(aFunction2())

/* 
If-else syntax
*/

if(true){
    // if the condition is met
}else{
    // if the condition is not met
}

console.log("0" == 0)
console.log("0" === 0)

// comparison === !!! value AND type

// block/arrays - use cycle

const arr = [34, 15, 88, 2] // this is a block [ ]

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}

for (const item of arr) {
    console.log(item)
}