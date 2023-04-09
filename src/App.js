import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Students from './Components/Students';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
