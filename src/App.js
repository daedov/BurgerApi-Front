
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import Orders from './components/Orders'
import './index.css';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />


      <Route path="/Menu" element={<ProtectedRoutes>  <Menu/> </ProtectedRoutes> } /> 
      <Route path="/Orders" element={<ProtectedRoutes>  <Orders/> </ProtectedRoutes> } /> 
      <Route/>


    </Routes>
  );
}

export default App;
