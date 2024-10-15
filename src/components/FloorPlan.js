// src/components/FloorPlan.js
import React, { useState } from 'react';
import Room from './Room';
import RoomDetails from './RoomDetails';
import { Rnd } from 'react-rnd';

const FloorPlan = ({ rooms, updateRoom }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '1px solid #ccc', width: '500px', height: '500px', position: 'relative' }}>
        {rooms.map(room => (
          <Rnd
            key={room.id}
            size={{ width: room.width, height: room.height }}
            position={{ x: room.x, y: room.y }}
            onDragStop={(e, d) => updateRoom(room.id, { x: d.x, y: d.y })}
            onResizeStop={(e, direction, ref, delta, position) => {
              updateRoom(room.id, {
                width: ref.offsetWidth,
                height: ref.offsetHeight,
                ...position,
              });
            }}
            bounds="parent"
            onClick={() => handleSelectRoom(room)}
          >
            <Room room={room} updateRoom={updateRoom} />
          </Rnd>
        ))}
      </div>
      <RoomDetails room={selectedRoom} updateRoom={updateRoom} />
    </div>
  );
};

export default FloorPlan;
