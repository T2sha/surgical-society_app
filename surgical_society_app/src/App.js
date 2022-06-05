import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route path="/" element = {<Appointments/>}/>
          <Route path="/Patients" element = {<Patients/>}/>
          <Route path="/Doctors" element = {<Doctors/>}/>
        </Routes>
       
      </header>
    </div>
  );
}

export default App;
