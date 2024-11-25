import  { useState } from 'react';
import { CirclePicker } from 'react-color';

const CirclePickerComponent = () => {
  // State to store the selected color
  const [color, setColor] = useState('#4caf50'); // Default color is green

  // Function to handle color changes
  const handleChangeComplete = (selectedColor) => {
    setColor(selectedColor.hex); // Update the state with the selected color
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Select a Color</h2>
      <CirclePicker
        color={color}
        onChangeComplete={handleChangeComplete}
        colors={[
          '#4caf50', '#ff5722', '#ffc107', '#2196f3', '#9c27b0',
          '#f44336', '#e91e63', '#3f51b5', '#607d8b',
        ]} // Custom palette
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

export default CirclePickerComponent;
