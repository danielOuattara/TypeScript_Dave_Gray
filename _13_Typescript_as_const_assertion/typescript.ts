export {};

const username = "Dave"; // primitive

// username = "John"; // Incorrect

//----------------------------
const user = {
  name: "John",
  country: "China",
} as const;

// user.age = 40; // Incorrect now !

console.log("user = ", user);
//----------------------------

const OS_List = ["debian", "FreeBSD"] as const;
// OS_List.push("OpenBSD"); // Incorrect now !

console.log("OS_List = ", OS_List);
