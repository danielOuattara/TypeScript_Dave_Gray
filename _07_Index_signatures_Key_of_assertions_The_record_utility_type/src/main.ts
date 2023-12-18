/*  Index signatures
--------------------- */

// Errors in code
//
interface Transaction_0 {
  pizza: number;
  books: number;
  job: number;
}

const todayTransactions_0: Transaction_0 = {
  pizza: 10,
  books: 5,
  job: 20,
};

console.log(todayTransactions_0.pizza); // OK
console.log(todayTransactions_0["pizza"]); // OK

let prop_0: string = "pizza";
// console.log(todayTransactions_0[prop_0]);

// const todaysNet_0 = (transactions: Transaction_0): number => {
//   let total = 0;
//   for (const transaction in transactions) {
//     total += transactions[transaction];
//   }

//   return total;
// };

// console.log(todaysNet_0(todayTransactions_0));

/*  index Signature correction 
-------------------------------------------------------------- */

interface Transaction {
  [prop: string]: number;
}

const todayTransactions: Transaction = {
  pizza: -10,
  books: -5,
  job: 20,
};

console.log(todayTransactions.pizza); // OK
console.log(todayTransactions["pizza"]); // Ok

let prop: string = "pizza";
console.log(todayTransactions[prop]); // OK

const todaysNet = (transactions: Transaction): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

console.log(todaysNet(todayTransactions));

/* readonly modifier 
-------------------------------------------------------------- */

interface Transaction_2 {
  readonly [prop: string]: number;
}

const todayTransactions_2: Transaction_2 = {
  pizza: -10,
  books: -5,
  job: 20,
};

console.log(todayTransactions_2.pizza); // OK
console.log(todayTransactions_2["pizza"]); // Ok

let prop_2: string = "pizza";
console.log(todayTransactions_2[prop]);

const todaysNet_2 = (transactions: Transaction_2): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

console.log(todaysNet(todayTransactions_2));
// todayTransactions_2.pizza = 40; // Index signature in type 'Transaction_2' only permits reading.

/* Non existing Props 
------------------------- */

console.log(todayTransactions["Daniel"]); // undefined CAUTION

/* Required properties combined with an indexed  signature 
----------------------------------------------------------- */
interface Transaction_3 {
  readonly [prop: string]: number;
  pizza: number;
  books: number;
  job: number;
}

const todayTransactions_3: Transaction_3 = {
  pizza: -10,
  books: -5,
  job: 20,
};

console.log(todayTransactions_3.pizza); // OK
console.log(todayTransactions_3["pizza"]); // Ok

let prop_3: string = "pizza";
console.log(todayTransactions_3[prop]);

const todaysNet_3 = (transactions: Transaction_3): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

console.log("------------------------------------------------------------- ");

/*  Optional Properties
------------------------- */

interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  exam: "pass",
  name: "John Doe",
  GPA: 3.4,
  classes: [100, 300],
};

console.log(student.exam);

/*  keyof Assertions
---------------------- */

for (const key in student) {
  console.log(`${key} : ${student[key]}`);
}
