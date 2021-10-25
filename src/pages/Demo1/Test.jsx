import { useState } from "react";

export function TestChild({ type, title, content, id, action }) {
  const [state, setState] = useState(0);
  const [name, setName] = useState("Hello");
  const increase = () => {
    setState(state + 1);
  };
  const decrease = () => {
    setState(state - 1);
  };

  const changename = (name) => {
    setName("Hello" + " " + name);
  };

  const handleChangeInput = (e) => {
    let nameValue = e.currentTarget.name;
    let valueInput = e.currentTarget.value;
    console.log(nameValue);
    console.log(valueInput);
  };
  return (
    <div className={`testchild ${type === "react" ? "react" : ""}`}>
      <h1>Tile: {title}</h1>
      <p>Content: {content}</p>
      <p>ID: {id}</p>
      <p>CourseNumber: {state}</p>
      {action ? (
        <button onClick={increase}>Increase</button>
      ) : (
        <button onClick={decrease}>Decrease</button>
      )}

      <div className="changename">
        <h2>{name}</h2>
        <button onClick={() => changename("Thien")}>Thien</button>
        <button onClick={() => changename("Tuyen")}>Tuyen</button>
      </div>

      <div className="changeinput">
        <input
          type="text"
          name="ten"
          onChange={handleChangeInput}
          placeholder="Nhap ten *"
        />
        <input
          type="number"
          name="phone"
          onChange={handleChangeInput}
          placeholder="Nhap sdt *"
        />
      </div>
    </div>
  );
}
