import { useState, useEffect } from "react";

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

  //----
  // side effect: One thing change and another thing also changes because of the 1st change
  useEffect(() => {
    console.log("Mounting");

    return () => {
      console.log("Unmounting");
    };
  }, []);

  //---

  useEffect(() => {
    console.log("UP");

    return () => {
      console.log("DOWN");
    };
  }, [users]);

  //

  return <div className="App"></div>;
}

export default App;
