import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  let decreaseCounter = () => {
    setValue(value - 1);
  };
  let increaseCounter = () => {
    setValue(value + 1);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={decreaseCounter}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={increaseCounter}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
