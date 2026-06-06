import { useReducer } from "react";
import "./Input.css";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    }
    default: {
      return state;
    }
  }
};
export default function Input(props) {
  console.log(props.validators);

  const [mainInput, dispatch] = useReducer(inputReducer, {
    isValid: false,
    value: "",
  });

  const onChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value, isValid: true });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${mainInput.isValid ? "success" : "error"}`}
        onChange={onChangeHandler}
        value={mainInput.value}
      ></input>
    ) : (
      <textarea
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${mainInput.isValid ? "success" : "error"}`}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    );

  return <div>{element}</div>;
}
