//Arrow function with two arguments
const sum = (firstParam,secondParam) => {
    return firstParam + secondParam;
};
console.log(sum(2,5)); //prints:7

//arrow function with no arguments
const printHello = () => {
    console.log("hello");
};
printHello();//prints:hello

//arrow function with a single argument
const checkweight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms.`);
};
checkweight(25); //prints: Baggage weight: 25 kilograms.

//concisearrow functions
const multiply  = (a,b) => a*b;
console.log(multiply(2,30)); //prints:60