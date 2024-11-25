import  { useState } from 'react';
import { ChromePicker } from 'react-color';

const InlineColorPicker = () => {
  const [color, setColor] = useState('#3498db');
  const [displayPicker, setDisplayPicker] = useState(false);

  return (
    <div>
      <button
        style={{
          backgroundColor: color,
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
        }}
        onClick={() => setDisplayPicker(!displayPicker)}
      >
        Pick Color
      </button>

      {displayPicker && (
        <div style={{ position: 'absolute', zIndex: 2 }}>
          <div
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={() => setDisplayPicker(false)}
          />
          <ChromePicker color={color} onChange={(updatedColor) => setColor(updatedColor.hex)} />
        </div>
      )}
    </div>
  );
};

export default InlineColorPicker;
