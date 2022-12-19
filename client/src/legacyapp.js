import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  // Use the useState hook to manage the state of the app
  const [items, setItems] = useState([]);

  // Define a function for loading the items from the server
  const loadItems = async () => {
    // Use Axios to send a GET request to the server
    const response = await axios.get('http://127.0.0.1:3000/items');

    // Update the state of the app with the data from the response
    setItems(response.data);
  };

  // Define a function for creating a new item
  const createItem = async (item) => {
    // Use Axios to send a POST request to the server
    await axios.post('http://127.0.0.1:3000/items', item);

    // After the item is created, load the updated list of items from the server
    loadItems();
  };

  // Define a function for updating an existing item
  const updateItem = async (item) => {
    // Use Axios to send a PUT request to the server
    await axios.put(`http://127.0.0.1:3000/items/${item.id}`, item);

    // After the item is updated, load the updated list of items from the server
    loadItems();
  };

  // Define a function for deleting an item
  const deleteItem = async (itemId) => {
    // Use Axios to send a DELETE request to the server
    await axios.delete(`http://127.0.0.1:3000/items/${itemId}`);

    // After the item is deleted, load the updated list of items from the server
    loadItems();
  };

  // Render the items in a list
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => updateItem(item)}>Update</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
      ))}
      <button onClick={() => createItem({ name: 'New item' })}>Create</button>
    </ul>
  );
};

//export default App;
