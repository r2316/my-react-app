import React, { useState } from 'react';

const ItemTable = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 20, category: 'Electronics', qty: 5 },
    { id: 2, name: 'Item 2', price: 15, category: 'Clothing', qty: 10 },
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', price: '', category: '', qty: '' });

  const handleEdit = (item) => {
    setEditingItem(item);
    setNewItem({ ...item });
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSave = () => {
    setItems(
      items.map((item) =>
        item.id === editingItem.id ? { ...editingItem, ...newItem } : item
      )
    );
    setEditingItem(null);
    setNewItem({ name: '', price: '', category: '', qty: '' });
  };

  const handleCancel = () => {
    setEditingItem(null);
    setNewItem({ name: '', price: '', category: '', qty: '' });
  };

  return (
    <div className="container mx-auto mt-10 p-6">
      <h1 className="text-2xl font-semibold mb-6">Item Table</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Price</th>
            <th className="px-4 py-2 border-b">Category</th>
            <th className="px-4 py-2 border-b">Quantity</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">${item.price}</td>
              <td className="px-4 py-2 border-b">{item.category}</td>
              <td className="px-4 py-2 border-b">{item.qty}</td>
              <td className="px-4 py-2 border-b">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-md"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingItem && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Item Name</label>
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <input
              type="number"
              value={newItem.qty}
              onChange={(e) => setNewItem({ ...newItem, qty: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemTable;
