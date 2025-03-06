import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='passwordBox'>
        <h2>Password Generator</h2>
        <div className="passwordBoxIn">
          <input tpye="text" readOnly />
          <button>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
