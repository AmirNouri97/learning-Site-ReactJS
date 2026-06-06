import { useReducer, useState } from "react";

export default function TestUseReducer() {
  //   const [count, setCount] = useState(0);

  const countReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { count: state.count + 1 };
      case "MINUS":
        return { count: state.count - 1 };
    }
  };
  const [count, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div>
      <h2>{count.count}</h2>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>ADD</button> */}
      {/* <button onClick={() => setCount((prev) => prev - 1)}>MINUS</button> */}
      <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>MINUS</button>
    </div>
  );
}
