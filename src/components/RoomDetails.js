// src/components/RoomDetails.js
import React from 'react';

const RoomDetails = ({ room, updateRoom }) => {
  if (!room) return null;

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Room Details</h3>
      <label>
        Name:
        <input
          type="text"
          value={room.name}
          onChange={e => updateRoom(room.id, { name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Width:
        <input
          type="number"
          value={room.width}
          onChange={e => updateRoom(room.id, { width: Number(e.target.value) })}
        />
      </label>
      <br />
      <label>
        Height:
        <input
          type="number"
          value={room.height}
          onChange={e => updateRoom(room.id, { height: Number(e.target.value) })}
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="color"
          value={room.color}
          onChange={e => updateRoom(room.id, { color: e.target.value })}
        />
      </label>
    </div>
  );
};

export default RoomDetails;
