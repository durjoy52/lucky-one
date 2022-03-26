import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import './Card.css';
const Card = ({item,addCart}) => {
    const {name,img,price} =item
    return (
        <div className='m-3'>
            <div className='card p-2' >
                <img className='img-fluid rounded' src={img} alt="" />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <button className='btn btn-primary' onClick={_ =>addCart(item)}>ADD TO CART <BsCartPlusFill  fontSize={20}></BsCartPlusFill></button>
            </div>
        </div>
    );
};

export default Card;