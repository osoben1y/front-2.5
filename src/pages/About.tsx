import { useDispatch } from "react-redux";
import { addItem } from "../lib/itemsSlice";
import { useState } from "react";

export default function About() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    dispatch(addItem({ id: Date.now().toString(), name }));
    setName("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>About</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
