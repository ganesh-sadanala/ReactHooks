import { useReducer } from "react";

export default function App() {
  const [number, setNumber] = useReducer((number, newNumber) => {
    return number + newNumber;
  }, 0);
  return <h1 onClick={() => setNumber(1)}>{number}</h1>;
}
