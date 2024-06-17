import Dropdown from './dropdown/drop-down';
import './App.css';

const App = () => {
  const items = ['Yes', 'Probably not'];

  return (
    <div className="App">
      <h2>Should you use a dropdown?</h2>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
