import logo from './logo.svg';
import './App.css';
import Products from './components/products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import Cartdetails from './components/Cartdetails';
import Registration from './components/Registration';
import Allusers from './components/Allusers';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={< Home/>}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/card" element={<Cartdetails/>}/>
    <Route path="/Registration" element={<Registration/>}/>
    <Route path="/Allusers" element={<Allusers/>}/>

    </Routes>
  </BrowserRouter>
    </Provider>

  );
}

export default App;
