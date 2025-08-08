import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { deleteItem } from '../features/data/dataSlice';
import EditModal from '../components/EditModal';
import type { ItemType } from '../features/data/types';

const Home = () => {
  const items = useSelector((state: RootState) => state.data.items);
  const dispatch = useDispatch();

  const [editingItem, setEditingItem] = useState<ItemType | null>(null);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {items.length === 0 && <p>Users not found</p>}
      <ul className="space-y-4">
        {items.map(item => (
          <li
            key={item.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-md"
          >
            <span>{item.name}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setEditingItem(item)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => dispatch(deleteItem(item.id))}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editingItem && (
        <EditModal
          item={editingItem}
          onClose={() => setEditingItem(null)}
        />
      )}
    </div>
  );
};

export default React.memo(Home);
