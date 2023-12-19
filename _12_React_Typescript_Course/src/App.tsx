import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";

export default function App() {
  return (
    <>
      <Heading title="React + TypeScript" />
      <Section>
        <p>This is the child JSX for Section component</p>
        <p>Me too ! </p>
      </Section>
      <Counter />
    </>
  );
}
