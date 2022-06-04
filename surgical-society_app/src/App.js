
import Navigation from './components/Navigation';
import Appointments from './components/Appointments';
import Calendar from './components/Calendar';
import Doctors from './components/Doctors';
import LogIn from './components/LogIn';
import Patients from './components/Patients';
import Register from './components/Register';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navigation/>

      <Routes>
        <Route path="/" element = {<Appointments/>}/>
        <Route path="/Patients" element = {<Patients/>}/>
        <Route path="/Doctors" element = {<Doctors/>}/>
        <Route path="/LogIn" element = {<LogIn/>}/>
        <Route path="/Register" element = {<Register/>}/>
        <Route path="/Calendar" element = {<Calendar/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
