import './App.css';
import { animals } from './animals';

function App() {
  return (
    <div className='App'>
      <h1>{animals.dolphin.facts[0]}</h1>
    </div>
  );
}

export default App;
