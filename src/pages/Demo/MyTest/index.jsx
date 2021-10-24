import React from "react";
import { useState, useRef, forwardRef, useImperativeHandle } from "react";

export default forwardRef(function TestChild(props, ref) {
  // const inputRef = useRef();
  const [state, setState] = useState(20);

  const handleClick = () => {
    let valueInput = ref.current.value;
    setState(parseInt(state) + parseInt(valueInput));
  };

  return (
    <div className="TestChild">
      <h1>TEST1</h1>
      <p />
      {state}
      <input type="text" name={props.name} ref={ref} value={state} />
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  );
});
