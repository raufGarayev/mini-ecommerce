import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {decreaseCart, removeFromCart, addToCart, clearCart, getTotals} from "../features/cartSlice";

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item))
    }

    const handleDecreaseCart = (item) => {
        dispatch(decreaseCart(item))
    }

    const handleIncreaseCart = (item) => {
        dispatch(addToCart(item))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    useEffect(() => {
        dispatch(getTotals())
    },[cart, dispatch])

    return (
        <div className={"cart-container"}>
            <h2>Shopping Cart</h2>
            {cart.cartItem.length === 0 ? (
                <div className={"cart-empty"}>
                    <p>Your cart is empty</p>
                    <div className={"start-shopping"}>
                        <Link to={'/'}>
                            <AiOutlineArrowLeft />
                            <span>Start shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (<div>
                <div className={"titles"}>
                    <h3 className={"product-title"}>Title</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    {cart.cartItem?.map(item => (
                        <div className={'cart-item'} key={item.id}>
                            <div className="cart-product">
                                <img src={item.image} alt={item.name}/>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                    <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                                </div>
                            </div>
                            <div className="cart-product-price">${item.price}</div>
                            <div className="cart-product-quantity">
                                <button onClick={() => handleDecreaseCart(item)}>-</button>
                                <div className="count">{item.cartQuantity}</div>
                                <button onClick={() => handleIncreaseCart(item)}>+</button>
                            </div>
                            <div className="cart-product-total-price">
                                ${item.cartQuantity * item.price}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <button onClick={handleClearCart} className={'clear-cart'}>Clear Cart</button>
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className={"amount"}>${cart.cartTotalAmount}</span>
                        </div>
                        <p>Taxes and shipping calculated at checkout</p>
                        <button>Checkout</button>
                        <div className={"continue-shopping"}>
                            <Link to={'/'}>
                                <AiOutlineArrowLeft />
                                <span>Continue shopping</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Cart;