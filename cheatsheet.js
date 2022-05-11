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

/* 
block comment shortcut: shift + alt + a
line comment shortcut: ctrl + k + c
*/


/*  Find the smallest integer */

class SmallestIntegerFinder {
    findSmallestInt(args) {
      // save our first number someway
      // let firstNumber = args[0]
      let smallestNumber = args[0]
      // compare it with the next one - for loop
      for(let i = 0; i < args.length; i++){
        // we are using ; instead of , when we use for loop, i++ means i = i + 1
        let currentNumber = args[i]
        // if the currentNumber is smaller, we have to update the value of smallestNumber with the value of the currentNumber
        if(currentNumber < smallestNumber){
          smallestNumber = currentNumber
        }
      }
      return smallestNumber // always return outside the for loop, otherwise it ends the loop
    }

    if (condition) {
        
    } else {
        
    }

    /*Remove first and last characters of all string*/

    function removeChar(str){
        let result = "";
        
        for (let i = 0; i < str.length; i++){
          if(i === 0){
            continue;
          };
          if(i === str.length - 1){
            break;
          };
          result += str[i]
        };
        return result;
      };

    /*Simplifying*/

    function removeChar(str){
        let result = "";
        
        for (let i = 0; i < str.length; i++){
          if(i === 0 || i === str.length - 1){
            /* || boolean operator - or */
            continue;
          };
          result += str[i]
        };
        return result;
      };

      /* String method */

      function removeChar(str){
        let result = str.slice(1, str.length - 1)
        return result
      };

      /* arrow function */

      const removeChar = str => str.slice(1, str.length - 1);

      /* this arrow function is a short for: */

      function removeChar(str){
        return str.slice(1, str.length - 1)
      }

      /* String repeat */
      /* repeat method */

      function repeatStr (n, s) {
        return s.repeat(n);
      }

/* for loop */

      function repeatStr (n, s) {
        let result = "";
        
        for (let i = 0; i < n; i++) {
          result += s;
        }
        return result
      }

/* A wolf in sheep's clothing */

      function warnTheSheep(queue) {
        let iWolf = queue.indexOf("wolf")
        let iSheep = queue.length - iWolf -1
        
        if (iWolf === queue.length - 1) {
          return "Pls go away and stop eating my sheep"
        } else {
          return `Oi! Sheep number ${iSheep}! You are about to be eaten by a wolf!`
        }
      };

// a?b:c - if-else-hez hasonló működés

/* My head is at the wrong end! */

function fixTheMeerkat(arr) {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr
}

function fixTheMeerkat(arr) {
  let result = arr.reverse();
  return result
}

function fixTheMeerkat(arr) {
  let correctOrder = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      correctOrder[2] = arr[i]
    } else if (i === 2) {
      correctOrder[0] = arr[i]
    }
  correctOrder[1] = arr[1];
  }
  return correctOrder
}


function maxMultiple(divisor, bound){
	let max = 0;

	for (i = bound; i > 0; i--) {
	  if (i % divisor === 0) {
		max = i;
	  }
	}
	return max;
  }

  function maxMultiple(divisor, bound){
	let max = 0;
	
	for (i = divisor; i <= bound; i++) {
	  if ( i % divisor === 0) {
		max = i
	  }
	}
	return max
  }
