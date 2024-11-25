import './App.css';
import BlockPickerComponent from './components/BlockPickerComponent';
import MyChromePicker from './components/ChromePicker';
import CirclePickerComponent from './components/CirclePickerComponent';
import ColorPickerExample from './components/ColorPickerExample';
import TwitterPickerComponent from './components/TwitterPickerComponent';

function App() {
  return (
    <div>
      <ColorPickerExample />
      <MyChromePicker />
      <BlockPickerComponent/>
      <TwitterPickerComponent/>
      <CirclePickerComponent/>
    </div>
  );
}

export default App;
