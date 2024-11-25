import './App.css';
import BlockPickerComponent from './components/BlockPickerComponent';
import MyChromePicker from './components/ChromePicker';
import CirclePickerComponent from './components/CirclePickerComponent';
import ColorPickerExample from './components/ColorPickerExample';
import InlineColorPicker from './components/InlineColorPicker';
import PhotoshopPickerComponent from './components/PhotoshopPicker';
import SketchPickerComponent from './components/SketchPickerComponent';
import TwitterPickerComponent from './components/TwitterPickerComponent';

function App() {
  return (
    <div>
      <ColorPickerExample />
      <MyChromePicker />
      <BlockPickerComponent/>
      <TwitterPickerComponent/>
      <CirclePickerComponent/>
      <PhotoshopPickerComponent/>
      <InlineColorPicker />
      <SketchPickerComponent/>
    </div>
  );
}

export default App;
