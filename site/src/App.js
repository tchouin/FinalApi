import logo from './logo.svg';
import './App.css';
import './components/Weapon'
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MainPage/>
        </p>
      </header>
    </div>
  );
}

export default App;
