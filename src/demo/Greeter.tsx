import React from "react";

function Greeter(myProps: any) {
  // props.first = "Dave"; => would cause an error, because props are immutable !!

  return (
    <h1>
      Hello, {myProps.firstName} {myProps.lastName}
    </h1>
  );
}

export default Greeter;
