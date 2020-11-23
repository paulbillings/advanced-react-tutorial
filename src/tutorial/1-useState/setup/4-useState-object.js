import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Sir Dubeington",
    age: 50000000,
    message: "random message",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "I am an old weirdo beardo" });
  };
  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Message: {person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
