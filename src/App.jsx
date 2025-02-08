import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
//import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is Enabled","success");
      document.title="TextUtils - Dark mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode is Enabled","success");
      document.title="TextUtils - Light mode"
    }
  }
  return (
    <>
    {/* <Navbar/> */}
    <Router>
        <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />} />
          </Routes>
        </div>
      </Router>  
    </>
  )
}

export default App
