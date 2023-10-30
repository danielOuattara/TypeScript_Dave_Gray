"use strict";
// Literals type
let myName;
let userName;
userName = "John"; // Only Dave, John or Amy
// userName= "Samanta" // Incorrect; read  above
// ------- function
const add = (a, b) => a + b;
const add_2 = (a, b) => a + b;
const logMessage = (message) => console.log(`Message is : ${message}`);
logMessage("Hello");
logMessage(add(2, 7));
logMessage(add_2(-3, -2));
function subtract(a, b) {
    return a - b;
}
function subtract_2(a, b) {
    return a - b;
}
logMessage(subtract(3, 8));
logMessage(subtract_2(-3, 8));
let multiply = function (number1, number2) {
    return number1 * number2;
};
logMessage(multiply(23, 54));
let multiply_interface = function (number1, number2) {
    return number1 * number2;
};
logMessage(multiply_interface(23, 54));
// optional parameters with function
const add_no_optional = (a, b, c) => a + b + c;
const add_optional = (a, b, c) => {
    if (typeof c === "undefined") {
        return a + b;
    }
    return a + b + c;
};
logMessage(add_optional(1, 2, 3));
logMessage(add_optional(1, 3));
// default parameter at the end of args list
const add_optional_2 = (a, b, c = 0) => a + b + c;
logMessage(add_optional_2(5, 6, 7));
logMessage(add_optional_2(5, 6));
// rest parameter
//---
const total = (...nums) => nums.reduce((total, current) => total + current, 0);
logMessage(total(1, 2, 3, 4, 5));
//---
const total_2 = (a, ...nums) => nums.reduce((total, current) => total + current, 0);
logMessage(total(10, 1, 2, 3, 4, 5));
// never type
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const infiniteLoop = () => {
    let i = 1;
    while (true)
        i++;
};
// logMessage(infiniteLoop());
const infiniteLoop_2 = () => {
    let i = 1;
    while (true) {
        i++;
        logMessage(i);
        if (i > 100)
            break;
    }
};
infiniteLoop_2();
// using the never type again
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "string")
        return "number";
    return createError("This should never happen");
};
// custom type Guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString_2 = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
