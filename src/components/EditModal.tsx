import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../features/data/dataSlice';
import type { ItemType } from '../features/data/types';

interface Props {
  item: ItemType;
  onClose: () => void;
}

const EditModal: React.FC<Props> = ({ item, onClose }) => {
  const [value, setValue] = useState(item.name);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (!value.trim()) return;
    dispatch(updateItem({ ...item, name: value }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80 space-y-4">
        <h2 className="text-xl font-semibold">Update</h2>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-gray-500">Cancel</button>
          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
