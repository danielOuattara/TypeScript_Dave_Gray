console.log("----------------------------------------");

/*  basics of class
------------------- */

class Coder {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

/*  Larger class
------------------- */

class Coder_2 {
  name: string;
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

/*  Visibility modifier 
------------------------- */

class Coder_3 {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string,
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

/*  Assignment Assertion Operator 
---------------------------------- */

class Coder_4 {
  secondLanguage!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string,
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

/*  Private & Protected Example 
------------------------------- */

class Coder_5 {
  secondLanguage!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript",
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
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
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLanguage() {
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
/*  Implements for Interface 
----------------------------- */

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const clapton = new Guitarist("Eric Clapton", "guitar");
console.log(clapton.play("burns"));

console.log("----------------------------------------");

/* Static class members 
------------------------ */

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

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
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((item) => typeof item === "string")
    ) {
      this.dataState = [...this.dataState, ...value];
    } else {
      throw new Error("Param is not an array of string");
    }
  }
}

const myBand = new Bands();
console.log("myBand.data = ", myBand.data);

myBand.data = ["John Doe", "Ana Raw", "Tupac Shakur"];
console.log("myBand.data = ", myBand.data);

// again
myBand.data = ["Pepe Caller", "Salif Keita", "Toumani Djabater"];
console.log("myBand.data = ", myBand.data);
