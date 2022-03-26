import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import CartSide from './Components/CartSide/CartSide';
import Header from './Components/Header/Header';
function App() {
  const [items,setItems] = useState([])
  const[carts,setCarts] = useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setItems(data))
  },[])
  const addCart = cart =>{
const uniqueCarts = carts.filter(item => item !== cart)
  const newCarts = [...uniqueCarts,cart]
  if(newCarts.length > 4){
    alert('4 items already added')
    return
  }
  setCarts(newCarts)
  }
const randomCart = _ =>{
  if(carts.length === 0){
    return
  }
 const randomCart = [carts[Math.floor(Math.random() * carts.length)]]
 setCarts(randomCart)
}
  const removeItem = _ =>{
    setCarts([])
  }
  const deleteCart = (card) =>{
    const item = carts.filter(cart => cart !== card)
    setCarts(item)
  }
  return (
    <div className="App">
     <Header></Header>
        <div className='row main-section'>
          <div className='col-md-10 row'>
          {
            items.map(item =><Card addCart={addCart} item={item} key={item.id}></Card>)
          }
          </div>
          <div className="col-md-2 cart-side">
         {
           carts.map(cart =><CartSide deleteCart={deleteCart} cart={cart} key={cart.id}></CartSide>)
         }
         <button onClick={randomCart} className='btn btn-warning my-2 d-block'>Choose for me</button>
         <button onClick={removeItem} className='btn btn-danger mb-2'>Choose again</button>
          </div>
        </div>
      
    </div>
  );
}

export default App;
