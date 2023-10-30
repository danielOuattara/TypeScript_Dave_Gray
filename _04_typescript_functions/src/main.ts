// Type alias
type stringOrNumber = string | number;

type Guitarists = {
  name: string;
  active: boolean;
  albums: stringOrNumber[];
};

interface GuitaristsInterface {
  name?: string;
  active: boolean;
  albums: stringOrNumber[];
}

type UserId = stringOrNumber;

// Literals type

let myName: "Daniel";

let userName: "Dave" | "John" | "Amy";
userName = "John"; // Only Dave, John or Amy
// userName= "Samanta" // Incorrect; read  above

// ------- function
const add = (a: number, b: number) => a + b;
const add_2 = (a: number, b: number): number => a + b;
const logMessage = (message: any) => console.log(`Message is : ${message}`);

logMessage("Hello");
logMessage(add(2, 7));
logMessage(add_2(-3, -2));

function subtract(a: number, b: number) {
  return a - b;
}
function subtract_2(a: number, b: number): number {
  return a - b;
}

logMessage(subtract(3, 8));
logMessage(subtract_2(-3, 8));

//------------- type function signature
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (number1, number2) {
  return number1 * number2;
};
logMessage(multiply(23, 54));

//------------- interface function signature
interface mathFunctionInterface {
  (a: number, b: number): number;
}

let multiply_interface: mathFunctionInterface = function (number1, number2) {
  return number1 * number2;
};

logMessage(multiply_interface(23, 54));

// optional parameters with function

const add_no_optional = (a: number, b: number, c: number): number => a + b + c;

const add_optional = (a: number, b: number, c?: number): number => {
  if (typeof c === "undefined") {
    return a + b;
  }
  return a + b + c;
};

logMessage(add_optional(1, 2, 3));
logMessage(add_optional(1, 3));

// default parameter at the end of args list
const add_optional_2 = (a: number, b: number, c: number = 0): number =>
  a + b + c;

logMessage(add_optional_2(5, 6, 7));
logMessage(add_optional_2(5, 6));

// rest parameter

//---
const total = (...nums: number[]): number =>
  nums.reduce((total, current) => total + current, 0);

logMessage(total(1, 2, 3, 4, 5));

//---
const total_2 = (a: number, ...nums: number[]): number =>
  nums.reduce((total, current) => total + current, 0);

logMessage(total(10, 1, 2, 3, 4, 5));

// never type

const createError = (errorMsg: string) => {
  throw new Error(errorMsg);
};

const infiniteLoop = () => {
  let i: number = 1;
  while (true) i++;
};

// logMessage(infiniteLoop());

const infiniteLoop_2 = () => {
  let i: number = 1;
  while (true) {
    i++;
    logMessage(i);
    if (i > 100) break;
  }
};

infiniteLoop_2();

// using the never type again

const numberOrString = (value: stringOrNumber): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "string") return "number";
  return createError("This should never happen");
};

// custom type Guard

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString_2 = (value: stringOrNumber): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen");
};
