"use strict";
console.log("----------------------------------------");
/*  basics of class
------------------- */
class Coder {
    constructor(name) {
        this.name = name;
    }
}
/*  Larger class
------------------- */
class Coder_2 {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
/*  Visibility modifier
------------------------- */
class Coder_3 {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
/*  Assignment Assertion Operator
---------------------------------- */
class Coder_4 {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
/*  Private & Protected Example
------------------------------- */
class Coder_5 {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return ` I'm ${this.age}`;
    }
}
const daniel = new Coder_5("Daniel", "Rock", 39);
console.log(daniel.getAge()); // 39
// daniel.age; // <-- Property 'age' is private and only accessible within class 'Coder_5'
// daniel.lang; // <-- Property 'lang' is protected and only accessible within class 'Coder_5' and its subclasses
/*  Compiling & Running Code
------------------------------- */
/*  Extend Class
----------------- */
class WebDeveloper extends Coder_5 {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLanguage() {
        return `Coding in ${this.lang}`;
    }
}
console.log("----------------------------------------");
const daniel_2 = new WebDeveloper("lenovo", "Daniel", "Jazz", 39);
console.log(daniel_2.getAge());
console.log(daniel_2.getLanguage());
// console.log(daniel_2.age); // <-- Property 'age' is private and only accessible within class 'Coder_5'.
// console.log(daniel_2.lang); // <-- Property 'lang' is protected and only accessible within class 'Coder_5' and its subclasses.ts(2445);
console.log("----------------------------------------");
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const clapton = new Guitarist("Eric Clapton", "guitar");
console.log(clapton.play("play"));
console.log("----------------------------------------");
/* Static class members
------------------------ */
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
console.log(Peeps.count);
const john = new Peeps("John");
const steeve = new Peeps("Steeve");
const any = new Peeps("Any");
console.log(Peeps.count);
console.log(steeve.id);
console.log(any.id);
/*  Getters & Setters
---------------------- */
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
}
