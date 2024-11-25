import  { useState } from 'react';
import { PhotoshopPicker } from 'react-color';

const PhotoshopPickerComponent = () => {
  // State to store the selected color
  const [color, setColor] = useState('#000000'); // Default color is black
  const [displayPicker, setDisplayPicker] = useState(false); // Toggle picker visibility

  // Function to handle color changes
  const handleChangeComplete = (selectedColor) => {
    setColor(selectedColor.hex); // Update state with selected color
  };

  // Function to toggle the picker visibility
  const togglePicker = () => {
    setDisplayPicker(!displayPicker);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Photoshop Color Picker</h2>
      <button onClick={togglePicker} style={{ marginBottom: '10px' }}>
        {displayPicker ? 'Close Picker' : 'Open Picker'}
      </button>
      {displayPicker && (
        <PhotoshopPicker
          color={color}
          onChangeComplete={handleChangeComplete}
          onAccept={() => setDisplayPicker(false)} // Close picker on accept
          onCancel={() => setDisplayPicker(false)} // Close picker on cancel
        />
      )}
      <p style={{ marginTop: '10px' }}>
        Selected Color: <span style={{ color }}>{color}</span>
      </p>
      <div
        style={{
          marginTop: '10px',
          width: '100px',
          height: '100px',
          backgroundColor: color,
          border: '1px solid #ccc',
        }}
      >
        Color Preview
      </div>
    </div>
  );
};

export default PhotoshopPickerComponent;
