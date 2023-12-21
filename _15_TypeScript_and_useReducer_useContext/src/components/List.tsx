import { ReactNode } from "react";

interface ListPropsType<T> {
  itemsList: T[];
  render?: (item: T) => ReactNode;
}

export default function List<T>({ itemsList, render }: ListPropsType<T>) {
  return (
    <>
      <h2>Listing: </h2>
      <ul>
        {itemsList.map((item, index) => {
          if (typeof render === "undefined") {
            return <li key={index}>{item}</li>;
          } else {
            return <li key={index}>{render(item)}</li>;
          }
        })}
      </ul>
    </>
  );
}
