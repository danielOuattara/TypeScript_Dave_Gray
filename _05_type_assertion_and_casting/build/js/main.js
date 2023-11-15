"use strict";
/* https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions */
/* convert types with assertions to more or less specific
--------------------------------------------------------- */
let a = "Hello";
console.log(a);
let b = a; // assignment to less specific type
console.log(b);
let c = a; // assignment to more specific type
console.log(c);
/* generics bracket syntax instead of "as"
---------------------------------------- */
let d = "World";
let e = 3;
/* narrowing return values with Assertions
-------------------------------------------- */
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let value_1 = addOrConcat(12, 43, "add");
console.log(value_1);
let value_2 = addOrConcat(12, 43, "concat");
console.log(value_2);
/* Assertions allows mistake:
----------------------------- */
// Be careful ! Typescript sees no problem: but there is one problem here
let value_3 = addOrConcat(12, 43, "concat");
console.log(value_2);
/*  Double casting
------------------ */
// 10 as string; // X Incorrect
10; // Correct now
/* DOM Selection Types
---------------------- */
// more specific
const image = document.querySelector("img");
// less specific
const image_2 = document.querySelector("#image_2");
// less specific: use Non-null assertions
const image_3 = document.getElementById("#image_3");
const source_1 = image === null || image === void 0 ? void 0 : image.src;
const source_2 = image_2.src;
const source_3 = image_3.src;
/* Angle  brackets & the DOM
------------------------------ */
// less specific
const image_4 = document.querySelector("#image_2");
// less specific: use Non-null assertions
const image_5 = document.getElementById("#image_3");
/* Student challenge: copyright.ts */
