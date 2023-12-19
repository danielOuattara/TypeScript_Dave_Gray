type HeadingPropsType = {
  title: string;
};

export default function Heading({ title }: HeadingPropsType) {
  return <h1>{title}</h1>;
}
