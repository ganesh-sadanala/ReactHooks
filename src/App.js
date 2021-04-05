import { useReducer } from "react";

export default function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div>
      <label for="checkbox">{checked ? "checked" : "not checked"}</label>
      <input type="checkbox" id="checkbox" onClick={toggle} />
    </div>
  );
}
