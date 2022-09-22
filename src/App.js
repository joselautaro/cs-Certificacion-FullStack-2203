import './App.css';
import Todo from './Todo';
import Timer from './Timer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Creamos un To do list & Timer</h1>
        <Todo/>
        <Timer/>
      </header>
    </div>
  );
}

export default App;
