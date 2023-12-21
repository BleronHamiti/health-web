import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Add useEffect here
  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <div>{/* Existing content */}</div>
      <h1>Vite + React</h1>
      {/* Rest of your component */}
    </>
  );
}

export default App;
