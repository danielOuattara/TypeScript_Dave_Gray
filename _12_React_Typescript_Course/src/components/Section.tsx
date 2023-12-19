// OLD way

// import React from "react";

// export const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };

//---------------------------------------------------------------------------------

// RECENT
import { ReactNode } from "react";

type SectionType = {
  title?: string;
  children: ReactNode;
};

export const Section = ({
  children,
  title = "My Heading from Section",
}: SectionType) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
