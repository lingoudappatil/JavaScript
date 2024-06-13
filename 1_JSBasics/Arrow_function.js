// Traditional anonymous function
console.log((function(a) {
    return a + 1;
})(10)); 

// Arrow functions
console.log((a => {
    return a + 2;
})(10)); 

console.log((a => a + 3)(10)); 
console.log(((a) => a + 4)(10)); 

// Single parameter doesn't need parentheses
console.log((a => a + 5)(10)); 
