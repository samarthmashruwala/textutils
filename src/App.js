
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom"


function App() {

  const[mode,setMode]=useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(39 56 80)';
      showAlert("dark mode enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled","success");
    }
  }
  return (
  <>
  {/* <Router> */}
  <Navbar propText="TextUtils" mode={mode} toggleMode={toggleMode} about="About Us"/>
  <Alert alert={alert}/>
  <div className="container">
        {/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={}> 
          </Route>
         </Routes> */}
         <Textform heading="enter the text for analyze" mode={mode} showAlert={showAlert}/>
 </div>
{/* </Router> */}
  </>
  );
}

export default App;
