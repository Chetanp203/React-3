import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Login from './Components/24-07/Login';
import Register from './Components/24-07/Register';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact  path='/welcome' element={<Welcome/>}/> 
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      
    
     <Footer/>
    </div>
  );
}

export default App;
