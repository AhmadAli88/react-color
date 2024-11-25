import  { useState } from 'react';
import { ChromePicker } from 'react-color';

const MyChromePicker = () => {
  // State to store the selected color
  const [color, setColor] = useState('#fff'); // Default color is white

  // Function to handle color changes
  const handleChangeComplete = (selectedColor) => {
    setColor(selectedColor.hex); // Update the state with the selected color
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Pick a Color</h2>
      <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
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

export default MyChromePicker;
