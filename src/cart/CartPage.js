import React from 'react';
import './CartPage.css'
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decrementQuantity, deleteFromCart } from '../cart/Actions'; // Correct path as necessary
import { useNavigate } from 'react-router-dom';

function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    let navigate = useNavigate();
    // No need for local qty and total state, remove useState hooks for them

    function placeOrder(){
        navigate('/Orders')

    }

    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrementQuantity = (id) => {
        dispatch(decrementQuantity(id));
    };

    const handleRemoveItem = (id) => {
        dispatch(deleteFromCart(id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.Price, 0).toFixed(2);
    };

    return (
        <div className="cart-page" style={{ height: "100vh" }}>
            <br />
            <h2>Your Shopping Cart</h2>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.Product_ID} className="cart-item">
                            <img src={item.Image_URL} alt={item.Name} className="item-image" width={200}/>
                            <div className="item-details">
                                <h4>{item.Name}</h4>
                                <p>${item.Price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => handleDecrementQuantity(item.Product_ID)}>-</button>
                                    <span>{item.quantity}</span> {/* Update to use item.quantity */}
                                    <button onClick={() => handleIncreaseQuantity(item.Product_ID)}>+</button>
                                </div>
                                <button className="remove-item" onClick={() => handleRemoveItem(item.Product_ID)}>Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <br />
            {cartItems.length > 0 && (
                <div className="cart-summary">
                    <h3>Total: ${calculateTotal()}</h3>
                    <button className='btn btn-dark' onClick={placeOrder}>Buy Now</button> {/* Use calculateTotal for dynamic calculation */}
                </div>
            )}
            <br />
        </div>
    );
}

export default CartPage; // Since we're using useSelector and useDispatch, we don't need connect and mapDispatchToProps anymore.
