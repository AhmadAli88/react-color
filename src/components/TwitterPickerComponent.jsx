import { useState } from 'react';
import { TwitterPicker } from 'react-color';

const TwitterPickerComponent = () => {
  // State to store the selected color
  const [color, setColor] = useState('#1DA1F2'); // Default color is Twitter blue

  // Function to handle color changes
  const handleChangeComplete = (selectedColor) => {
    setColor(selectedColor.hex); // Update the state with the selected color
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Pick a Color</h2>
      <TwitterPicker
        color={color}
        onChangeComplete={handleChangeComplete}
        colors={[
          '#1DA1F2', '#FFAD1F', '#F45D22', '#794BC4', '#17BF63',
          '#E0245E', '#FFCC4D', '#0073B1', '#333333',
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

export default TwitterPickerComponent;
