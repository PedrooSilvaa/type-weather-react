import { useState } from 'react';
import './App.css';
import Dash from './components/Dash';
import Search from './components/Search';
// import Search from './components/Search';

function App() {

  const [local, setLocal] = useState("");

  const handleLocal = (propsLocal) => {
    setLocal(propsLocal)
      setGameStage(stages[1].name)
  }

  const stages = [
    {id: 1, name: "search"},
    {id: 2, name: "dash"},
  ]
  const [gameStage, setGameStage] = useState(stages[0].name);
  return (
    <div className="App">
        {gameStage === 'search' && <Search handleLocal={handleLocal}/>}
        {gameStage === 'dash' && <Dash localizacao={local} handleLocal={handleLocal}/>}
    </div>
  );
}

export default App;
