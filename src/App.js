import React, { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("jane");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
    console.log(`The name is: ${name}`);
  }, [name, admin]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not admin"}`);
  });
  return (
    <section>
      <p>Congratulations! {name}</p>
      <button onClick={() => setName("Will")}>Change</button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={() => setAdmin(true)}>Log In</button>
    </section>
  );
}
