import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";

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

      <List itemsList={["one", "two", "three"]} />

      <List
        itemsList={[1, 2, 3]}
        render={(item: number) => <span className="gold">{item}</span>}
      />

      <List
        itemsList={[
          { name: "John", country: "Jamaica" },
          { name: "Jana", country: "Bolivia" },
        ]}
        render={(item: { name: string; country: string }) => (
          <span className="gold">
            My name is {item.name}. I come from {item.country}
          </span>
        )}
      />
    </>
  );
}
