import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Products from './pages/Products';
import {useState} from 'react';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import { SharedPages } from './pages/SharedPages';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
function App() {

  const [user,setUser]=useState(null);
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/'element={<SharedPages/>}>

        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='products/:productId' element={<SingleProduct/>}/>
        <Route path='login' element={<Login setUser={setUser}></Login>}/>
        <Route path='dashboard' element={
          <ProtectedRoute user={user}>

            <Dashboard user={user}/>
          </ProtectedRoute>
           }/>
        <Route path='*' element={<Error/>}/>
        </Route>
     
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
