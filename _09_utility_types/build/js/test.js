async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
}

const users_2Data = fetchUsers();
const users = await users_2Data;
console.log("users", users);
