import logo from './logo.svg';
import './App.css';
import './components/Weapon'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Weapon/>
        </p>
      </header>
    </div>
  );
}

export default App;
