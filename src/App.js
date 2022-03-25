import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import CartSide from './Components/CartSide/CartSide';
import Header from './Components/Header/Header';
import StoreSide from './Components/StoreSide/StoreSide';
function App() {
  const [items,setItems] = useState([])
  const[carts,setCarts] = useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setItems(data))
  },[])
  const addCart = cart =>{
    const newCarts = [...carts,cart]
    setCarts(newCarts)
  }
const randomCart = _ =>{
 const randomCart = [carts[Math.floor(Math.random() * carts.length)]]
 setCarts(randomCart)
}
  const removeItem = _ =>{
    setCarts([])
  }
  return (
    <div className="App">
     <Header></Header>
        <div className='row '>
          <div className='col-md-10 row'>
          {
            items.map(item =><StoreSide addCart={addCart} item={item} key={item.id}></StoreSide>)
          }
          </div>
          <div className="col-md-2">
         {
           carts.map(cart =><CartSide cart={cart} key={cart.id}></CartSide>)
         }
         <button onClick={randomCart} className='btn btn-warning mb-2 d-block'>Choose for me</button>
         <button onClick={removeItem} className='btn btn-danger'>Choose again</button>
          </div>
        </div>
      
    </div>
  );
}

export default App;
