/*  ----- Array ----- */

// mouse over to see

let stringArray = ["one", "two", "three"];
// stringArray[0] = 42; // Type 'number' is not assignable to type 'string'.ts(2322) | let stringArray: string[]
stringArray[0] = "John"; // OK
// stringArray.push(23); // --> incorrect Argument of type 'number' is not assignable to parameter of type 'string'
stringArray.push("hello"); // OK

let guitars = ["Strat", "les paul", 5150];

let mixData = ["EVH", 1983, true];

guitars[0] = 1977; // OK
guitars.unshift("Jim");
// guitars.unshift(true); // --> incorrect: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// stringArray = guitars; // --> incorrect
guitars = stringArray; // OK

// guitars = mixData; // --> incorrect: hover to understand
mixData = guitars; // OK

let test = [];

let test_2: string[] = [];
test_2.push("Van Gogh");

/* ------- Tuple -------*/

let myTuples: [string, number, boolean]; // this tuple is required to have 3 elements and order must be respected
myTuples = ["John", 23, true];

let mixed = ["John", 123, false];

mixed = myTuples; // OK
// myTuples = mixed; // --> Incorrect: Hover to see
// myTuples[0] = 90; // --> Incorrect: Order is not respected

/* ----- Object ----- */

let myObject_1: object;
myObject_1 = []; // OK
console.log(typeof myObject_1); // Object

myObject_1 = {}; // OK
console.log(typeof myObject_1); // Object

myObject_1 = test_2; // Ok

//----

const exampleObject = { prop1: "Daniel", prop2: true };
exampleObject.prop1 = "Julie"; // OK
// exampleObject.prop2 = 24 // --> incorrect

//---

type Guitarists = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

// ------ interface

interface GuitaristsInterface {
  name: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarists = {
  name: "Eddie",
  active: false,
  albums: [1984, 5140, "OU812"],
};

let evh_interface: GuitaristsInterface = {
  name: "Eddie",
  active: false,
  albums: [1984, 5140, "OU812"],
};

let jp_interface: GuitaristsInterface = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

//---

type Guitarists_2 = {
  name: string;
  active?: boolean;
  albums?: (string | number)[];
};

let evh_2: Guitarists_2 = {
  name: "Eddie",
  albums: [1984, 5140, "OU812"],
};
let jp_2: Guitarists_2 = {
  name: "Jimmy",
  active: true,
};

//---

const greetGuitarist = (guitarist: Guitarists) => {
  return `Hello ${guitarist.name} !`;
};

console.log(greetGuitarist(evh));

//------- optional prop & method

type Guitarists_3 = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

let evh_3: Guitarists_3 = {
  // name: "Eddie",
  active: true,
  albums: [1984, 5140, "OU812"],
};

const greetGuitarist_3 = (guitarist: Guitarists_3) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()} !`;
  }
  return `Hello !`;
};

console.log(greetGuitarist_3(evh_3));

// ------------ enums

enum Grade {
  U,
  D = 3,
  C,
  B,
  A,
}

console.log(Grade.U);
console.log(Grade.C);
console.log(Grade.A);
