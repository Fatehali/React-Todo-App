import './App.css';
import TodoApp from './views/TodoApp';
import WeatherApp from './views/WeatherApp';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState(true);
  return (
    <div className="App">
      <NavBar visible={tab} setVisible={ (val) => setTab(val) } />
      <header className="App-header">
        { tab ? <TodoApp /> : <WeatherApp /> }
      </header>
    </div>
  );
}

export default App;
