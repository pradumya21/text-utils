import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1700);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#121212';
      showAlert("Dark mode has been activated","success")
    } 
    else if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#ffffff';
      showAlert("Light mode has been activated","success")
    }
  }
  const toggleMode2 = ()=>{
    if(mode==='light'){
      setMode('blue');
      document.body.style.backgroundColor='#042743';
      showAlert("Blue mode has been activated","success")
    } 
    else if(mode==='blue'){
      setMode('light');
      document.body.style.backgroundColor='#ffffff';
      showAlert("Light mode has been activated","success")
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="This is my text area" showAlert={showAlert} mode={mode}/>
        {/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="This is my text area" showAlert={showAlert} mode={mode}/>}>  
          </Route>
        </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
