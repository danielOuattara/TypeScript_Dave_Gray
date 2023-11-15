/* https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions */

/* Starter code 
----------------- */

type One = string;
type Two = string | number;
type Three = "hello";

/* convert types with assertions to more or less specific 
--------------------------------------------------------- */

let a: One = "Hello";
console.log(a);

let b = a as Two; // assignment to less specific type
console.log(b);

let c = a as Three; // assignment to more specific type
console.log(c);

/* generics bracket syntax instead of "as"  
---------------------------------------- */

let d = <One>"World";
let e = <string | number>3;

/* narrowing return values with Assertions
-------------------------------------------- */

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat",
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let value_1 = addOrConcat(12, 43, "add");
console.log(value_1);

let value_2: string = addOrConcat(12, 43, "concat") as string;
console.log(value_2);

/* Assertions allows mistake:  
----------------------------- */

// Be careful ! Typescript sees no problem: but there is one problem here
let value_3: number = addOrConcat(12, 43, "concat") as number;
console.log(value_2);

/*  Double casting 
------------------ */

// 10 as string; // X Incorrect

10 as unknown as string; // Correct now

/* DOM Selection Types 
---------------------- */
// more specific
const image = document.querySelector("img");

// less specific
const image_2 = document.querySelector("#image_2") as HTMLImageElement;
// less specific: use Non-null assertions
const image_3 = document.getElementById("#image_3")! as HTMLImageElement;

const source_1 = image?.src;
const source_2 = image_2.src;
const source_3 = image_3.src;

/* Angle  brackets & the DOM 
------------------------------ */

// less specific
const image_4 = <HTMLImageElement>document.querySelector("#image_2");
// less specific: use Non-null assertions
const image_5 = <HTMLImageElement>document.getElementById("#image_3")!;

/* Student challenge: copyright.ts */
