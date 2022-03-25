import React from 'react';
import { MdDelete } from 'react-icons/md';
import './CartSide.css';
const CartSide = ({cart}) => {
    return (
        <div className='row bg-secondary mb-2 rounded align-items-center'>
                <div className="col-md-4">
                    <img className='w-100 rounded' src={cart.img} alt="" />
                </div>
                <div className="col-md-6 text-white">
                    <p className='fw-bold m-0'>{cart.name}</p>
                    <p><small>${cart.price}</small></p>
                </div>
                <div className="col-md-2">
                <MdDelete color='#435' fontSize={30}></MdDelete>
                </div>
        </div>
    );
};

export default CartSide;
