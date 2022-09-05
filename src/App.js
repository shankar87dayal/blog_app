import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
// import Base from './components/Base';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

import About from   './pages/About';
import CustomNavbar from './components/CustomNavbar';
import Signup from './pages/Signup';
import Services from './pages/Services';

function App() {
  return (

    <BrowserRouter>
    
      <Routes>

        <Route path='/' element= {<Home />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/singup' element= {<Signup />} />
        
        <Route path='/about' element= {<About/>} />
        <Route path='/service' element= {<Services/>} />
        {/* <Route path='/customNavbar' element= {<CustomNavbar />} /> */}

      </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
