import './App.css'
// bootsrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Cart from './pages/Cart';
import Favourites from './pages/Favourites';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import PetDetails from './pages/PetDetails';
import Register from './pages/Register';
import ShopPets from './pages/ShopPets';
import ShopSupplies from './pages/ShopSupplies'


function App() {
 

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element= {<LandingPage/>}/>
      <Route path='/login' element= {<Login/>}/>
      <Route path='/register' element= {<Register/>}/>
      <Route path='/shopPets' element= {<ShopPets/>}/>
      <Route path='/shopSupplies' element= {<ShopSupplies/>}/>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='/favourites' element= {<Favourites/>}/>
      <Route path='/petDetails' element= {<PetDetails/>}/>
      <Route path='/adminDashboard' element= {<AdminDashboard/>}/>
     </Routes>
     
     <Footer/>
    </>
  )
}

export default App
