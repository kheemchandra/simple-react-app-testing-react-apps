import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [textChanged, setTextChanged] = useState(false);

  const textChangeHandler = () => {
    setTextChanged(true);
  }

  return <div>
    <h1>Hello World!</h1>
    {!textChanged && <Output>It's nice to see you again!</Output>}
    {textChanged && <Output>Text changed!</Output>}
    <button onClick={textChangeHandler}>Change!</button>
  </div>
};

export default Greeting;