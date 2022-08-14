import { useState } from "react";

const Greeting = () => {
  const [textChanged, setTextChanged] = useState(false);

  const textChangeHandler = () => {
    setTextChanged(true);
  }

  return <div>
    <h1>Hello World!</h1>
    {!textChanged && <p>It's nice to see you again!</p>}
    {textChanged && <p>Text changed!</p>}
    <button onClick={textChangeHandler}>Change!</button>
  </div>
};

export default Greeting;