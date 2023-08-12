import './App.css';
import { useState } from 'react';
import Tabs from "./components/Tabs"

function App() {
  const [tabs, setTabs] = useState([
    {
      etiqueta: "Tab 1",
      contenido: "Tab 1 content",
      seleccionada: true,
    },
    {
      etiqueta: "Tab 2",
      contenido: "Tab 2 content",
      seleccionada: false,
    }
  ]);

  return (
    <div className="App">
      <Tabs tabs={tabs} setTabs={setTabs}/>
    </div>
  )
}

export default App;
