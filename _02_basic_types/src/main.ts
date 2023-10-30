// typescript type auto inference
let myName = "Daniel";

// no auto inference
let yourName: string = "Julie";

// yourName = 12; // --> Incorrect : Type 'number' is not assignable to type 'string'

let hisName: string;

hisName = "John"; // OK

let meaningOfLife: number;
meaningOfLife = 23;

let isLoading: boolean;
isLoading = true;

let album: any;
album = 12;
album = "Hello";
album = true;

const sum_1 = (a: number, b: number) => a + b;
const sum_2 = (a: number, b: number): number => a + b;
const sum_3 = (a: number, b: string) => a + b;

let album_2: string | number; // union type
album_2 = 23;
album_2 = "Hello";

let postId: string | number;
let isActive: number | boolean;

let regex = /\w+/g;
let regex_2: RegExp = /\w+/g;
