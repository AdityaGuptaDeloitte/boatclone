import { connect, useDispatch, useSelector } from 'react-redux';
import './ProductCard.css'; // Ensure your CSS file is set up to style these new elements.
import { addToCart } from '../cart/Actions';
import store from '../cart/CartStore';



function ProductCard(props) {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    // Step5:  Perform the operations using dispatch
    const handleAddToCart = (event) => {
        event.preventDefault(); // Prevent default anchor link behavior
        const product = {
            Product_ID: props.Product_ID, // Assuming your product object has an Id field
            Name: props.Name,
            Price: props.Price,
            Image_URL: props.Image_URL,
            Quantity: 1, // Default quantity to 1 when adding a new item
        };
        dispatch({type: "ADD_TO_CART",payload: product}); // Dispatch the addToCart action with the product
    }


    const truncateDescription = (description) => {
        const maxLength = 120;
        return description.length > maxLength
            ? description.substring(0, maxLength) + "..."
            : description;
    };

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span className={`star ${i <= rating ? 'on' : 'off'}`} key={i}>&#9733;</span> // This is the Unicode for a star
            );
        }
        return stars;
    };

    return (
        <div className="col">
            <div className="card" style={{ width: "16rem", height: "32rem" }}>
                <img className="card-img-top mt-3 mb-3" src={props.Image_URL} alt={props.Name} width={100} />
                <div className="card-body" style={{backgroundColor:"whitesmoke"}}>
                    <h4 className="card-title">{props.Name}</h4>
                    <div className="product-rating">{renderStars(props.Ratings)}  Rated: {props.Ratings}/5.0</div>
                    <h6 className="card-title">${props.Price} <span style={{textDecoration: "line-through", fontWeight: "normal", color: "gray", fontSize:"11px"}}> ${props.Price * 4}</span> <span class="text-success">75% off</span></h6>
                    <br/>
                    <p className="card-text text-secondary">{truncateDescription(props.Description)}</p>
                    <button className="btn btn-primary mb-0" onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}


const mapDispatchToProps = {
    addToCart
  };
  
export default connect(null, mapDispatchToProps)(ProductCard);
