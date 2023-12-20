import "./App.css";
import {
  useState,
  useEffect,
  useCallback,
  KeyboardEvent,
  MouseEvent,
  useMemo,
  useRef,
} from "react";

type User = {
  id: number;
  firstName: string;
};

type fibonacciFuncType = (n: number) => number;

type FibonacciFuncOptimizedType = (
  n: number,
  memo?: { [key: number]: number },
) => number;

// ------------------------- arrow function syntax
const fibonacciFunction: fibonacciFuncType = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacciFunction(n - 1) + fibonacciFunction(n - 2);
};

const myNumber: number = 13;

//----------------------------- classical function syntax
const fibonacciFunction2: fibonacciFuncType = function (n: number): number {
  if (n < 2) {
    return n;
  }
  return fibonacciFunction(n - 1) + fibonacciFunction(n - 2);
};

const myNumber2: number = 23;

//------------------------------- optimized

const fibonacciFunction3: FibonacciFuncOptimizedType = (n, memo = {}) => {
  if (n < 2) {
    return n;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = fibonacciFunction3(n - 1, memo) + fibonacciFunction3(n - 2, memo);
  return memo[n];
};
const myNumber3: number = 23;

//
//--------------------------------------------------------------------------
//
function App() {
  // const [data, setData] = useState(0); // Correct
  // const [data, setData] = useState<number | null>(0); // Correct
  // const [data, setData] = useState<null | User>(null); // Correct
  const [counter, setCounter] = useState<number>(0); // Correct
  const [users, setUsers] = useState<User[] | null>([]); // Correct

  //-----
  // side effect: One thing change and another thing also changes because of the 1st change
  useEffect(() => {
    console.log("Mounting");

    return () => {
      console.log("Unmounting");
    };
  }, []);

  //-----

  useEffect(() => {
    console.log("UP");

    return () => {
      console.log("DOWN");
    };
  }, [users]);

  //-----

  const adder = useCallback(
    (
      event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
    ) => {
      setCounter((prevState) => prevState + 1);
    },
    [],
  );

  //-----
  const result: number = useMemo(() => fibonacciFunction(myNumber), [myNumber]);
  const result2: number = useMemo(
    () => fibonacciFunction2(myNumber2),
    [myNumber2],
  );

  const result3 = fibonacciFunction3(myNumber3);

  //-----------------

  const inputRef = useRef<HTMLInputElement>(null);
  console.log("inputRef?.current = ", inputRef?.current);
  console.log("inputRef?.current?.value = ", inputRef?.current?.value);

  return (
    <div className="App">
      <section>
        <button
          onClick={() => {
            setCounter((prevState) => prevState - 1);
          }}
        >
          -
        </button>

        <button onClick={adder}>+</button>
      </section>
      <h2>{counter}</h2>
      <h2>{result}</h2>
      <h2>{result2}</h2>
      <h2>{result3}</h2>

      {/* ----------------- */}

      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
