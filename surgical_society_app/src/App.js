import Navigation from './components/Navigation';
import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" element = {<Register/>}/>
          <Route path="/Appointments" element = {<Appointments/>}/>
          <Route path="/Patients" element = {<Patients/>}/>
          <Route path="/Doctors" element = {<Doctors/>}/>
          <Route path="/Login" element = {<Login/>}/>
        </Routes>
       
      </header>
    </div>
  );
}

export default App;
