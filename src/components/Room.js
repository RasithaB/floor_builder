// src/components/Room.js
import React from 'react';

const Room = ({ room, updateRoom }) => {
  return (
    <div
      style={{
        border: '1px solid #000',
        backgroundColor: room.color || '#f0f0f0',
        padding: '10px',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
      }}
    >
      <input
        type="text"
        value={room.name}
        onChange={e => updateRoom(room.id, { name: e.target.value })}
        style={{ width: '100%', boxSizing: 'border-box' }}
      />
    </div>
  );
};

export default Room;
