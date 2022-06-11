import Navigation from './components/Navigation';
import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      < Navigation />

        <Routes>
          <Route path="/" element = {<Appointments/>}/>
          <Route path="/Patients" element = {<Patients/>}/>
          <Route path="/Doctors" element = {<Doctors/>}/>
          <Route path="/Login" element = {<Login/>}/>
        </Routes>
       
      </header>
    </div>
  );
}

export default App;
