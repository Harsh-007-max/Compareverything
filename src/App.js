import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Searchbar from './components/Searchbar';
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; //optional color #212529
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";

    }
  };
  return (
    <>
      <Searchbar title="Compareverything" hometxt="" linktxt="" disabledtxt="" toggleMode={toggleMode} mode={mode}/>
    </>
  );
}

export default App;
