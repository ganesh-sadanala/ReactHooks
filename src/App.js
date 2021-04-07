import { useTrees } from ".";

export default function App() {
  const { trees } = useTrees();

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
