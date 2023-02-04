import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homec from './components/Home';
import Loginc from './components/Login';
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
    <Router>
        <Routes>
          <Route exac path='/' element={<Homec mode={mode} toggleMode={toggleMode}/>} />
          <Route path='/login' element={<Loginc mode={mode}/>}/>
        </Routes>
    </Router>
    </>
  );
}
export default App;