import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Login from './Components/24-07/Login';
import Register from './Components/24-07/Register';
import AllProducts from './Components/29-07/AllProducts';
import AddProducts from './Components/29-07/AddProducts';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/add-products' element={<AddProducts/>}/>
        <Route exact path='/all-products' element={<AllProducts/>}/>
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
