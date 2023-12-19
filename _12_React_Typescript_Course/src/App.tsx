import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading title="React + TypeScript" />
      <Section>
        <p>This is the child JSX for Section component</p>
        <p>Me too ! </p>
      </Section>
      <Counter count={count} setCount={setCount}>
        <h2>The count children value is : {count}</h2>
      </Counter>
    </>
  );
}
