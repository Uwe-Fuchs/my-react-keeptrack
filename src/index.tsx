import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Greeter from "./demo/Greeter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//const person = { firstName: "John", lastName: "Doe" };
// root.render(
//   <Greeter firstName={person.firstName} lastName={person.lastName} />
// );
//root.render(<Greeter {...person} />);
