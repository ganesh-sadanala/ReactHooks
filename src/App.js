import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));

    console.log("calling");
  }, []);

  if (data) {
    return (
      <div>
        <ul>
          {data.map((user) => {
            return <li key={user.id}>{user.login}</li>;
          })}
        </ul>
        <button
          onClick={() => {
            setData([]);
          }}
        >
          Remove Data
        </button>
      </div>
    );
  }
  return <p>No Users</p>;
}
