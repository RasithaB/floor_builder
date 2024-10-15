// src/App.js
import React, { useState } from 'react';
import FloorPlan from './components/FloorPlan';
import './App.css';

const App = () => {
  const [rooms, setRooms] = useState([]);

  const addRoom = () => {
    const newRoom = {
      id: Date.now(),
      name: `Room ${rooms.length + 1}`,
      width: 100,
      height: 100,
      x: Math.random() * 400,
      y: Math.random() * 400,
      color: '#f0f0f0', // Default color
    };
    setRooms([...rooms, newRoom]);
  };

  const updateRoom = (id, newProperties) => {
    setRooms(rooms.map(room => (room.id === id ? { ...room, ...newProperties } : room)));
  };

  const totalArea = rooms.reduce((sum, room) => sum + room.width * room.height, 0);

  return (
    <div className="App">
      <h1>Interactive Floor Plan Builder</h1>
      <button onClick={addRoom}>Add Room</button>
      <h2>Total Area: {totalArea} m²</h2>
      <FloorPlan rooms={rooms} updateRoom={updateRoom} />
    </div>
  );
};

export default App;
