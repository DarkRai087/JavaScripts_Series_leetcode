// 1. Declare a function named expect that takes a parameter val.
var expect = function(val) {
  
    // 2. Return an object with two methods: toBe and notToBe.
    return {
        
        // 3. The toBe method compares val with another value (val2).
        toBe: (val2) => {
            
            // 4. If val is not equal to val2, throw an error with the message "Not Equal".
            if (val !== val2) throw new Error("Not Equal");
            
            // 5. If val is equal to val2, return true.
            else return true;
        },
        
        // 6. The notToBe method compares val with another value (val2).
        notToBe: (val2) => {
            
            // 7. If val is equal to val2, throw an error with the message "Equal".
            if (val === val2) throw new Error("Equal");
            
            // 8. If val is not equal to val2, return true.
            else return true;
        }
    };
};
