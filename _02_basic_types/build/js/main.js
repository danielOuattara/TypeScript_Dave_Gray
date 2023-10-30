"use strict";
// typescript type auto inference
let myName = "Daniel";
// no auto inference
let yourName = "Julie";
// yourName = 12; // --> Incorrect : Type 'number' is not assignable to type 'string'
let hisName;
hisName = "John"; // OK
let meaningOfLife;
meaningOfLife = 23;
let isLoading;
isLoading = true;
let album;
album = 12;
album = "Hello";
album = true;
const sum_1 = (a, b) => a + b;
const sum_2 = (a, b) => a + b;
const sum_3 = (a, b) => a + b;
let album_2; // union type
album_2 = 23;
album_2 = "Hello";
let postId;
let isActive;
let regex = /\w+/g;
let regex_2 = /\w+/g;
