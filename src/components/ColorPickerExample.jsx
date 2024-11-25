import { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPickerExample = () => {
  const [color, setColor] = useState('#ff0000');

  const handleChangeComplete = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Selected Color: <span style={{ color }}>{color}</span></h2>
      <SketchPicker 
        color={color} 
        onChangeComplete={handleChangeComplete} 
      />
      <div 
        style={{
          marginTop: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: color,
          border: '1px solid #000',
        }}
      >
        Selected Color Preview
      </div>
    </div>
  );
};

export default ColorPickerExample;
