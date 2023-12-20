import { useState } from "react";

type User = {
  id: number;
  firstName: string;
};

function App() {
  // const [data, setData] = useState(0); // Correct
  // const [data, setData] = useState<number | null>(0); // Correct
  // const [data, setData] = useState<null | User>(null); // Correct
  const [users, setUsers] = useState<User[] | null>([]); // Correct
  const [data, setData] = useState<number>(0); // Correct

  //

  return <div className="App"></div>;
}

export default App;
