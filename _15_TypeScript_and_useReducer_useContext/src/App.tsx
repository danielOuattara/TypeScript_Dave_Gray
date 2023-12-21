import "./App.css";
import Counter from "./components/Counter";
import CounterNew from "./components/CounterNew";

function App() {
  return (
    <>
      <Counter>{(num: number) => <>Current Count: {num} </>}</Counter>
      <CounterNew>{(num: number) => <>Current Count: {num} </>}</CounterNew>
    </>
  );
}

export default App;
