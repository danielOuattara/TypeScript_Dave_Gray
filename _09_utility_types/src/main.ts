export {};

/* Utility Types: useful for type transformation
--------------------------------------------------- */

/* Partial <Type>:
------------------ 
Constructs a type with all properties of Type set to optional. 
This utility will return a type that represents all subsets 
of a given type. 
*/

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

function assignmentToGrade(
  assignment: Assignment,
  propsToUpdate: Partial<Assignment>,
): Assignment {
  return { ...assignment, ...propsToUpdate };
}

const assignment1: Assignment = {
  studentId: "12ae123eat5gzg3",
  title: "Finance Project",
  grade: 0,
};
console.log("assignment1 = ", assignment1);

const assignment1_graded = assignmentToGrade(assignment1, { grade: 95 });
console.log("assignment2 = ", assignment1_graded);

/* Required <Type>
--------------------
Constructs a type consisting of all properties of Type set to required. 
The opposite of Partial.
*/

function assignmentToRecord(assignment: Required<Assignment>): Assignment {
  // do many things (send to database, etc...)
  return assignment;
}

// const recordedAssignment1 = assignmentToRecord(assignment1);

/* Readonly <Type>:
--------------------
Constructs a type with all properties of Type set to readonly, 
meaning the properties of the constructed type cannot be 
reassigned.
*/

const assignToVerify: Readonly<Assignment> = {
  ...assignment1_graded,
  verified: true,
};

assignmentToRecord({ ...assignment1_graded, verified: true });

//

/* Record <Keys, Type>
------------------------ 
Constructs an object type whose property keys are Keys and whose property values are Type. 
This utility can be used to map the properties of a type to another type.*/

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "E";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "D",
};

//---

interface Grades {
  science_grade: number;
  literature_grade: number;
}

const gradesData: Record<Students, Grades> = {
  Sara: { literature_grade: 65, science_grade: 95 },
  Kelly: { literature_grade: 85, science_grade: 75 },
};

//

/*Pick<Type, Keys>
------------------
Constructs a type by picking the set of properties Keys, 
(string literal or union of string literals) from Type. 
*/

type AssignmentResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignmentResult = {
  studentId: "laser_123",
  grade: 4,
};

/* 
Omit<Type, Keys>
------------------
Constructs a type by picking all properties from Type and 
then removing Keys (string literal or union of string literals). 
The opposite of Pick. 
*/

type AssignmentResultPreview = Omit<Assignment, "grade">;

const scorePreview: AssignmentResultPreview = {
  title: "computing",
  studentId: "kz_123",
  verified: false,
};

/* Exclude<UnionType, ExcludedMembers>
---------------------------------------
Constructs a type by excluding from UnionType 
all union members that are assignable to ExcludedMembers. 


Extract<Type, Union>
----------------------
Constructs a type by extracting from Type all union members 
that are assignable to Union.
*/

type adjustedGrade = Exclude<LetterGrades, "D" | "E">;

type highGrades = Extract<LetterGrades, "A" | "B">;

/* NonNullable<Type>
---------------------
Constructs a type by excluding null and undefined from Type. 
*/

type T0 = NonNullable<string | number | undefined>;
type T1 = NonNullable<string[] | null | undefined>;

type possibleGrades = "Dave" | "John" | null | undefined;
type NonNullPossibleGrades = NonNullable<possibleGrades>;

/* ReturnType<Type>
--------------------
Constructs a type consisting of the return type of function Type.

For overloaded functions, this will be the return type of the last 
signature; see Inferring Within Conditional Types. 
*/

declare function f1(): { a: number; b: string };

type T_0 = ReturnType<() => string>;

type T_1 = ReturnType<(s: string) => void>;

type T_2 = ReturnType<<T>() => T>;

type T_3 = ReturnType<<T extends U, U extends number[]>() => T>;

type T_4 = ReturnType<typeof f1>;

type T_5 = ReturnType<any>;

type T_6 = ReturnType<never>;

//-----

type newAssignment = { title: string; points: number };

function createNewAssignment(title: string, points: number): newAssignment {
  return { title, points };
}

// what if we didn't create the type initially, but we need to create it from function

type newAssignmentType = ReturnType<typeof createNewAssignment>;

/* Parameters<Type>
--------------------
Constructs a tuple type from the types used in the parameters 
of a function type Type.

For overloaded functions, this will be the parameters of the 
last signature; see Inferring Within Conditional Types. 
*/

declare function f1(arg: { a: number; b: string }): void;

type T_00 = Parameters<() => string>;

type T_11 = Parameters<(s: string) => void>;

type T_22 = Parameters<<T>(arg: T) => T>;

type T_33 = Parameters<typeof f1>;

type T_44 = Parameters<any>;

type T_55 = Parameters<never>;

// type T_66 = Parameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.

// type T7 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.

type AssignParams = Parameters<typeof createNewAssignment>;

const assignArgs: AssignParams = ["Genetics", 80];

const ts_Assign2: newAssignment = createNewAssignment(...assignArgs);

//

/* Awaited<Type>
------------------
This type is meant to model operations like await in async functions, 
or the .then() method on Promises - specifically, the way that they 
recursively unwrap Promises. 
*/

type A = Awaited<Promise<string>>;

type B = Awaited<Promise<Promise<number>>>;

type C = Awaited<boolean | Promise<number>>;

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetUsers(): Promise<User[]> {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .catch((err) => {
      if (err instanceof Error) {
        console.log(err.message);
      }
    });

  return data;
}

// type FetchUsersReturnType = ReturnType<typeof fetUsers>;
type FetchUsersReturnType = Awaited<ReturnType<typeof fetUsers>>;

fetUsers().then((usersList) => console.log(usersList));

console.log("-------------------------------------------------------------");
//
async function fetUsers_2(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
}

fetUsers_2().then((usersList) => console.log(usersList));
