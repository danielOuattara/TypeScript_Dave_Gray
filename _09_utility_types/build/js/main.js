"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function assignmentToGrade(assignment, propsToUpdate) {
    return Object.assign(Object.assign({}, assignment), propsToUpdate);
}
const assignment1 = {
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
function assignmentToRecord(assignment) {
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
const assignToVerify = Object.assign(Object.assign({}, assignment1_graded), { verified: true });
assignmentToRecord(Object.assign(Object.assign({}, assignment1_graded), { verified: true }));
//
/* Record <Keys, Type>
------------------------
Constructs an object type whose property keys are Keys and whose property values are Type.
This utility can be used to map the properties of a type to another type.*/
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "D",
};
const gradesData = {
    Sara: { literature_grade: 65, science_grade: 95 },
    Kelly: { literature_grade: 85, science_grade: 75 },
};
const score = {
    studentId: "laser_123",
    grade: 4,
};
const scorePreview = {
    title: "computing",
    studentId: "kz_123",
    verified: false,
};
function createNewAssignment(title, points) {
    return { title, points };
}
const assignArgs = ["Genetics", 80];
const ts_Assign2 = createNewAssignment(...assignArgs);
function fetUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .catch((err) => {
            if (err instanceof Error) {
                console.log(err.message);
            }
        });
        return data;
    });
}
fetUsers().then((usersList) => console.log(usersList));
console.log("-------------------------------------------------------------");
//
function fetUsers_2() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/users");
        return yield response.json();
    });
}
fetUsers_2().then((usersList) => console.log(usersList));
