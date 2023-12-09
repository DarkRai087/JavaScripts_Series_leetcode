// Declare a function named createCounter that takes a parameter init.
var createCounter = function(init) {
    
    // Declare a variable currentValue and initialize it with the value of init.
    let currentValue = init;

    // Return an object with three methods: increment, decrement, and reset.
    return {
        
        // The increment method is an arrow function that increases currentValue by 1 and returns the updated value.
        increment: () => ++currentValue,
        
        // The decrement method is an arrow function that decreases currentValue by 1 and returns the updated value.
        decrement: () => --currentValue,
        
        // The reset method is an arrow function that sets currentValue to init, then returns the initial value (init).
        reset: () => {
            currentValue = init;
            return init;
        }
    };
};
//=====================================================================================================================================
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let c = init;
    
    return {
        increment: () => ++c,
        decrement: () => --c,
        reset: () => c = init
    };
};