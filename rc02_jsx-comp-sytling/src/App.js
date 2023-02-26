import { useState } from "react";

function App() {
  const [name, setName] = useState("steve");
  const [number, setNumber] = useState(30);
  const [friends, setFriends] = useState(["Steve", "Fatma"]);
  const [adress, setAdress] = useState({
    title: "Istanbul",
    zip: 34756,
    at: "aaaaaa",
  });
  const { title, zip, at } = adress;

  return (
    <div className="container text-center mt-5">
      <h1>UseState Hook</h1>
      <h3>Merhaba {name}</h3>
      <h3>{number} yaşındayım</h3>
      <button onClick={() => setName("Leo")}>change name</button>
      <button onClick={() => setNumber(26)}>change number</button>

      {friends.map((item) => {
        return <div>{item}</div>;
      })}

      <button onClick={() => setFriends([...friends, "ali"])}>
        {" "}
        add new friend{" "}
      </button>
      <div>
        {title} {zip} {at}
      </div>
      <button
        onClick={() =>
          setAdress({ ...adress, title: "Ankara", zip: 100000, at: "asdddd" })
        }
      >
        Change the adress
      </button>
    </div>
  );
}

export default App;
