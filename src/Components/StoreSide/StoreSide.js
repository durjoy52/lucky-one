import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
const StoreSide = ({item,addCart}) => {
    const {name,img,price} =item
    return (
        <div className='col-md-4 mb-4'>
            <div className='card' >
                <img className='img-fluid' src={img} alt="" />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <button className='btn btn-primary' onClick={_ =>addCart(item)}>ADD TO CART <BsCartPlusFill  fontSize={20}></BsCartPlusFill></button>
            </div>
        </div>
    );
};

export default StoreSide;