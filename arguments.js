//sum - write a function that takes any number of arguments


function sum() { // using arguments keyword
   let sum = 0;

  for(let i = 0; i < arguments.length; i++){
    let el = arguments[i];
    sum += el;
  }
  return sum;
}

var sum =(...args) => { // fat arrow style
  let sum = 0;
  args.forEach(function(el){
    sum += el;
  });
  return sum;
}

function sum(...args){ // function style
  let sum = 0;
  args.forEach(function(el){
    sum += el;
  });
  return sum;
}


// console.log(sum(3,4,2,4,4));


// bind with args
//
// Rewrite your myBind method so that it can take both bind-time arguments and call-time arguments.

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}


const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true


// Solve it first using the arguments keyword
//
// Within your myBind method, you'll have to define a new, anonymous function to be returned. Be carefu
// l: using arguments inside the anonymous function will not give you the arguments passed to myBind, b
// ecause arguments is reset on every function invocation (just like this).

// That makes sense, because there are two arrays of arguments you care about:
// => the extra arguments passed to myBind, and
// => the arguments passed when the bound function is called.

Function.prototype.myBind1 = function (context){
  const funkshun = this;
  bindArgs = Array.from(arguments).slice(1); // returns everything after the first element
  // this makes sense because the context (i.e. breakfast) is the first argument
  return function(){
    const callArgs = Array.from(arguments); // the arguments passed when the bound function is called
    return funkshun.apply(context, bindArgs.concat(callArgs));
  }
}
// Now write a second version using the ...rest operator


Function.prototype.myBind2 = function (context, ...bindArgs){
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  }
}

// markov.says.myBind2(breakfast, "meow", "Kush")(); // bind args
// callArgs:
// bindArgs: meow,Kush
// ----------
// Breakfast says meow to Kush!

// markov.says.myBind2(breakfast)("meow", "a tree"); // call args
// callArgs: meow,a tree
// bindArgs:
// ----------
// Breakfast says meow to a tree!
// true

// markov.says.myBind2(breakfast, "meow")("Markov"); // 1 call arg, 1 bind arg
// callArgs: Markov
// bindArgs: meow



// curriedSum

// curriedSum(numArgs) should:
//
// Define an empty array, numbers.
// Defines a function, _curriedSum that:
// Closes over numArgs and numbers.
// Takes a single number as an argument.
// Appends this to numbers each time.
// If numbers.length === numArgs, it sums the numbers in the array and returns the result.
// Else, it returns itself.
// Returns _curriedSum.

  function curriedSum(numArgs){
    const numbers = [];
    function _curriedSum(num){
      numbers.push(num);

      if (numbers.length === numArgs){
        return numbers.reduce(function(sum,num){
          return sum + num;
        });
      } else {
        return _curriedSum;
      }
    }
    return _curriedSum;
  }

// console.log(curriedSum(3)(2)(4)(1)); // 7!

// Function.prototype.curry

// This function should:
// * Collect up arguments until there are numArgs of them
// * if there are not enough arguments, it should return itself
// * When there are numArgs arguments, it should call the original function
// * Write a version that uses Function.prototype.apply and another that Uses
// the spread ...

// This version uses apply
  Function.prototype.curriedFunc1 = function(numArgs){
    const fnction = this;
    const args = [];
    function _curriedFunc1(arg){
      args.push(arg);
    }
    if (args.length === numArgs){
      fnction.apply(null, args)
    } else {
        return _curriedFunc1;
      }
    }
    return _curriedFunc1;
  }

// This version uses the spread operator
  Function.prototype.curriedFunc2 = function(numArgs){
    const fnction = this;
    const args = [];
    function _curriedFunc2(arg){
      args.push(arg);
    }
    if (args.length === numArgs){
      return fnction(...args);
    } else {
        return _curriedFunc2;
      }
    }
    return _curriedFunc2;
  }
