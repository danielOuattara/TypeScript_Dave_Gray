import users from "./users";

export {};

/* Generics  
------------- */

// basics examples:

const echoString = (arg: string): string => arg;
const echoNumber = (arg: number): number => arg;

const echo = <T>(arg: T): T => arg;
//---------------------------------------------------

// generic functions: isEcho example

const isObj = <T>(arg: T): boolean =>
  typeof arg === "object" && !Array.isArray(arg) && arg !== null;

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" })); // true
console.log(isObj(null));

console.log("------------------------------------------------------");

// isTrue with keyof Assertion

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }

  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("John"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "John" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

console.log("------------------------------------------------------");

// Interface with generics example

interface BooleanCheck<T> {
  arg: T;
  is: boolean;
}

const isTrue_2 = <T>(arg: T): BooleanCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }

  return { arg, is: !!arg };
};

console.log(isTrue_2(false));
console.log(isTrue_2(0));
console.log(isTrue_2(true));
console.log(isTrue_2(1));
console.log(isTrue_2("John"));
console.log(isTrue_2(""));
console.log(isTrue_2(null));
console.log(isTrue_2(undefined));
console.log(isTrue_2({}));
console.log(isTrue_2({ name: "John" }));
console.log(isTrue_2([]));
console.log(isTrue_2([1, 2, 3]));
console.log(isTrue_2(NaN));
console.log(isTrue_2(-0));

console.log("------------------------------------------------------");

// Narrowing generics with "extends" keyword

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1 }));
console.log(processUser({ id: 1, username: "John", country: "Japan" }));

console.log("------------------------------------------------------");

// Multiple Type Variables & Extends with keyof

interface HasID {
  id: number;
}

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K,
): T[K][] => {
  return users.map((user) => user[key]);
};

//-----
console.log(
  getUsersProperty(
    [
      { id: 1, username: "Bella", country: "Spain" },
      { id: 2, username: "John", country: "Japan" },
    ],
    "country",
  ),
); // [ 'Spain', 'Japan' ]

//-----
console.log(getUsersProperty(users, "website")); // [ 'Spain', 'Japan' ]

console.log("------------------------------------------------------");

// Multiple Type Variables & Extends with keyof

interface HasID_2 {
  id: string | number;
  [prop: string]:
    | string
    | number
    | number[]
    | {
        [prop: string]: string | number | number[];
      };
}

const getUsersProperty_2 = <T extends HasID_2, K extends keyof T>(
  users: T[],
  key: K,
): T[K][] => {
  return users.map((user) => user[key]);
};

//-----
console.log(
  getUsersProperty_2(
    [
      {
        id: "1",
        username: "Bella",
        country: "Spain",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      { id: "2", username: "John", country: "Japan" },
    ],
    "",
  ),
); // [ 'Spain', 'Japan' ]

//-----

console.log("------------------------------------------------------");

// Classes with Generics

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(arg: T) {
    this.data = arg;
  }
}

const store = new StateObject("John");
console.log(store.state);

store.state = "Anna";
console.log(store.state);
