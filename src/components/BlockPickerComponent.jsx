import  { useState } from 'react';
import { BlockPicker } from 'react-color';

const BlockPickerComponent = () => {
  // State to store the selected color
  const [color, setColor] = useState('#3498db'); // Default color is blue

  // Function to handle color changes
  const handleChangeComplete = (selectedColor) => {
    setColor(selectedColor.hex); // Update the state with the selected color
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Select a Color</h2>
      <BlockPicker
        color={color}
        onChangeComplete={handleChangeComplete}
        colors={['#3498db', '#e74c3c', '#f1c40f', '#2ecc71', '#9b59b6', '#34495e']} // Custom palette
      />
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

export default BlockPickerComponent;
