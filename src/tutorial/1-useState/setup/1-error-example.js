import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
    // Title is changed but the app is not rerendered so user don't see change
    // Also, 'hello people' is not preserved
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
