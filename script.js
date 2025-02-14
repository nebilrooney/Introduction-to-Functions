function greet(name) {
    return "Hello " + name;
}

console.log(greet("Nebil")); 

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(5, 10)); 

let x = 10;

function changeValue() {
    let x = 20; 
    console.log("Inside function:", x);
}

console.log("Before function call:", x);
changeValue();
console.log("After function call:", x);

function outerFunction() {
    let count = 0;

    return function() {
        count++;
        console.log("Count:", count);
    };
}

const increment = outerFunction();
increment(); 
increment(); 
increment();
