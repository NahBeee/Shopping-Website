import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Fruit from './components/Fruits/Fruit';
import Cart from './components/Cart/Cart';
import NavBar from './navbar/navbar';
import { useEffect, useState } from 'react';
import axios from "axios";
import {CardContext} from "./Context/CartContext";

function App() {
  const [allFruits, setAllFruits]= useState([]);
  const [myCart,addtoCart]= useState([{}]);
  const [total,setTotal]= useState(0);
  useEffect(()=>{
    async function getData(){
      const response = await axios.get("/v1/fruit")
      return response;
    }
    getData().then((res)=> setAllFruits(res.data));
    getData().catch((error)=> console.log(error))
  },[])
  return (
    <CardContext.Provider value={{myCart,addtoCart, total, setTotal}}>
    <Router>
      <NavBar/>
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/fruits' element={<Fruit allFruits= {allFruits}/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </div>
    </Router>
    </CardContext.Provider>
  );
}

export default App;
