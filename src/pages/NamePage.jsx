import { useState } from "react";
import NameTag from "../components/NameTag";

const NamePage = ({ children }) => {
  return (
    <div className="container">
      <h1 style={{ color: "magenta", borderBottom: "1px solid black" }}>
        Different Styling in React
      </h1>
      <h2 className="css-style">Style with css</h2>
      {children}
    </div>
  );
};

export default NamePage;
