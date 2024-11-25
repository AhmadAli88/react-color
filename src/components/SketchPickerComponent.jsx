import { useState } from 'react';
import { SketchPicker } from 'react-color';

const SketchPickerComponent = () => {
  // State to store the selected color
  const [color, setColor] = useState('#ff0000'); // Default color is red

  // Handle color changes in real-time
  const handleChange = (updatedColor) => {
    setColor(updatedColor.hex); // Update the state with the selected color
  };

  // Handle color changes after selection is complete
  const handleChangeComplete = (updatedColor) => {
    setColor(updatedColor.hex); // Optionally do something when selection completes
    console.log('Final color selected:', updatedColor.hex);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sketch Color Picker</h2>
      <SketchPicker
        color={color}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
        disableAlpha={true} // Disables the alpha (transparency) slider
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

export default SketchPickerComponent;
