import { useState } from "react";

export default function Counter() {
  //   const [count, setCount] = useState<number>(0); // OK!
  // OR
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count is : {count}</h1>
      <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
    </>
  );
}
