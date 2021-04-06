import { useContext } from "react";
import { TreesContext } from ".";

export default function App() {
  const { trees } = useContext(TreesContext);

  return (
    <>
      <h1>Trees I've Heard Of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </>
  );
}
