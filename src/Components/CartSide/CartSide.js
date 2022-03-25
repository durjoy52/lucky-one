import React from 'react';
import './CartSide.css';
const CartSide = ({cart}) => {
    return (
        <div className='row bg-secondary mb-2 rounded align-items-center'>
                <div className="col-md-4">
                    <img className='w-100 rounded' src={cart.img} alt="" />
                </div>
                <div className="col-md-8 text-white">
                    <p className='fw-bold mb-2'>{cart.name}</p>
                    <p><small>${cart.price}</small></p>
                </div>
        </div>
    );
};

export default CartSide;
