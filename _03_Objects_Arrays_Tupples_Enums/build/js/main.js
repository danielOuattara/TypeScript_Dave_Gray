"use strict";
/*  ----- Array ----- */
// mouse over to see
let stringArray = ["one", "two", "three"];
let guitars = ["Strat", "les paul", 5150];
let mixData = ["EVH", 1983, true];
// stringArray[0] = 42; // Type 'number' is not assignable to type 'string'.ts(2322) | let stringArray: string[]
stringArray[0] = "John";
// stringArray.push(23); // --> incorrect Argument of type 'number' is not assignable to parameter of type 'string'
stringArray.push("hello"); // OK
guitars[0] = 1977; // OK
guitars.unshift("Jim");
// guitars.unshift(true); // --> incorrect: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// stringArray = guitars; // --> incorrect
guitars = stringArray; // OK
// guitars = mixData; // --> incorrect: hover to understand
mixData = guitars; // OK
let test = [];
let test_2 = [];
test_2.push("Van Gogh");
/* ------- Tuple -------*/
let myTuples; // this tuple is required to have 3 elements and order must be respected
myTuples = ["John", 23, true];
let mixed = ["John", 123, false];
mixed = myTuples; // OK
// myTuples = mixed; // --> Incorrect: Hover to see
// myTuples[0] = 90; // --> Incorrect: Order is not respected
/* ----- Object ----- */
let myObject_1;
myObject_1 = []; // OK
console.log(typeof myObject_1); // Object
myObject_1 = {}; // OK
console.log(typeof myObject_1); // Object
myObject_1 = test_2; // Ok
const exampleObject = { prop1: "Daniel", prop2: true };
// exampleObject.prop2 = 24 // --> incorrect
exampleObject.prop1 = "Julie"; // OK
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5140, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
let evh_2 = {
    name: "Eddie",
    albums: [1984, 5140, "OU812"],
};
let jp_2 = {
    name: "Jimmy",
    active: true,
};
//---
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name} !`;
};
console.log(greetGuitarist(evh));
