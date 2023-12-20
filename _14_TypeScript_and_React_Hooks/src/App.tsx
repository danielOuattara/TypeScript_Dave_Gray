import "./App.css";
import { useState, useEffect, useCallback, Key } from "react";

type User = {
  id: number;
  firstName: string;
};

function App() {
  // const [data, setData] = useState(0); // Correct
  // const [data, setData] = useState<number | null>(0); // Correct
  // const [data, setData] = useState<null | User>(null); // Correct
  const [counter, setCounter] = useState<number>(0); // Correct
  const [users, setUsers] = useState<User[] | null>([]); // Correct

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

  const adder = useCallback(
    (
      event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
    ) => {
      setCounter((prevState) => prevState + 1);
    },
    [],
  );

  return (
    <div className="App">
      <button
        onClick={() => {
          setCounter((prevState) => prevState - 1);
        }}
      >
        -
      </button>

      <button onClick={adder}>+</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
