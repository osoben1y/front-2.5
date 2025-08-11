import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib/store.ts";
import { deleteItem, updateItem } from "../lib/itemsSlice.ts";
import { useState } from "react";

export default function Home() {
  const items = useSelector((state: RootState) => state.items.list);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  const startEdit = (id: string, currentName: string) => {
    setEditId(id);
    setEditName(currentName);
  };

  const saveEdit = () => {
    if (!editName.trim()) return;
    dispatch(updateItem({ id: editId!, name: editName }));
    setEditId(null);
    setEditName("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Home</h1>
      {items.length === 0 && <p>No data</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: 10 }}>
            {editId === item.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {item.name}{" "}
                <button onClick={() => dispatch(deleteItem(item.id))}>
                  Delete
                </button>
                <button onClick={() => startEdit(item.id, item.name)}>
                  Update
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
