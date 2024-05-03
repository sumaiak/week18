import React, { useState, useEffect } from 'react';

export default () => {
  const [updated, setUpdated] = useState(false); // Initialized as false
  const [food, setFood] = useState([]); // Initialized as an empty array

  useEffect(() => {
    fetch("http://localhost:3002/foodRecipes")
      .then(res => res.json())
      .then(data => {
        setFood(data);
      });
  }, [updated]);

  const handleDelete = (e) => {
    fetch(`http://localhost:3002/foodRecipes/${e.target.id}`, {
      method: 'DELETE',
    }).then(() => {
      setUpdated(!updated);
    });
  };

  return (
    <>
      <h1>Food List</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>food</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {food.map((foods) => (
            <tr key={foods.id}>
              <td>{foods.id}</td>
              <td>{foods.food}</td>
              <td>{foods.price}</td>
              <td><button id={foods.id} onClick={handleDelete}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
