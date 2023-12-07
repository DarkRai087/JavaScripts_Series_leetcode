
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};



/**
 *1. Function Declaration 
  var createHelloWorld =function(){
  }
  This line declares a variable named createHelloWorld and assigns it a function.
  This function does not take any parameters.
  
 * 2. Return a Function:
   return function(...args) {
  The outer function returns another function. The ...args syntax is used to 
  collect any number of arguments passed to this inner function into an array named args.
  
 * 3.Return "Hello World":
  The inner function always returns the string "Hello World", regardless of any 
  arguments it receives.
  
 *4.Function closing
    The inner function always returns the string "Hello World", regardless 
     of any arguments it receives.
 */