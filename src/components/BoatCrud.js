import { useState } from "react";
import { dataServiceObj } from "../services/boatdata.service";
import './BoatCrud.css';

function BoatCrud() {
    const [prodsArray, setProdsArray] = useState([]);
    const [id, setID] = useState(0);
    const [Product_ID, setProductID] = useState("");
    const [Name, setProdName] = useState("");
    const [Category, setCategory] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const [Image_URL, setImageURL] = useState("");

    
    const [nameError, setNameError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [imageURLError, setImageURLError] = useState('');

    function getProdsButton_click() {
        dataServiceObj.getAllProds().then((resData) => {
            setProdsArray(resData.data);
        });
    }

    function validateFields() {
        let isValid = true;
        if (!Name) {
            setNameError('Name cannot be empty');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!Category) {
            setCategoryError('Category cannot be empty');
            isValid = false;
        } else {
            setCategoryError('');
        }

        if (!Price) {
            setPriceError('Price cannot be empty');
            isValid = false;
        } else {
            setPriceError('');
        }

        if (!Description) {
            setDescriptionError('Description cannot be empty');
            isValid = false;
        } else {
            setDescriptionError('');
        }

        if (!Image_URL) {
            setImageURLError('Image URL cannot be empty');
            isValid = false;
        } else {
            setImageURLError('');
        }

        return isValid;
    }

    function addProdsButton_click() {
        if (validateFields()) {
            let prodsObj = { id, Product_ID, Name, Category, Price, Description, Image_URL };

            dataServiceObj.addProds(prodsObj).then(() => {
                alert("New Product added");
                getProdsButton_click(); 
                clearFields();
            });
        }
    }

    function clearFields() {
        setID(0);
        setProductID("");
        setProdName("");
        setCategory("");
        setPrice("");
        setDescription("");
        setImageURL("");
    }

    function deleteProd_click(pid) {
        dataServiceObj.deleteProd(pid).then(() => {
            alert("Product Deleted");
            getProdsButton_click(); 
        });
    }

    function selectProd_click(pid) {
        dataServiceObj.getProdById(pid).then((resData) => {
            let prodsObj = resData.data;
            setID(prodsObj.id);
            setProductID(prodsObj.Product_ID);
            setProdName(prodsObj.Name);
            setCategory(prodsObj.Category);
            setPrice(prodsObj.Price);
            setDescription(prodsObj.Description);
            setImageURL(prodsObj.Image_URL);
        });
    }

    function updateProdsButton_click() {
        if (validateFields()) {
            let prodsObj = { id, Product_ID, Name, Category, Price, Description, Image_URL };

            dataServiceObj.updateProd(prodsObj).then(() => {
                alert("Product Updated");
                getProdsButton_click(); 
                clearFields();
            });
        }
    }

    let resultArray = prodsArray.map((item) => {
        return (
            <div className="card" key={item.id}>
                <img src={item.Image_URL} alt={item.Name} />
                <div className="card-content">
                    <p><strong>ID:</strong> {item.Product_ID}</p>
                    <p><strong>Name:</strong> {item.Name}</p>
                    <p><strong>Category:</strong> {item.Category}</p>
                    <p><strong>Price:</strong> {item.Price}</p>
                    <p><strong>Description:</strong> {item.Description}</p>
                </div>
                <div className="card-actions">
                    <button class="actionbtn" onClick={() => selectProd_click(item.id)}>Select</button>
                    <button class="actionbtn" onClick={() => deleteProd_click(item.id)}>Delete</button>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="header">
                <h3>Admin Product Access Portal</h3>
            </div>
            <div className="form-container">
                <div className="input-group">
                    <input type="text" placeholder="Name" value={Name} onChange={(e) => setProdName(e.target.value)} />
                    <span className="error-message">{nameError}</span>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Category" value={Category} onChange={(e) => setCategory(e.target.value)} />
                    <span className="error-message">{categoryError}</span>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Price" value={Price} onChange={(e) => setPrice(e.target.value)} />
                    <span className="error-message">{priceError}</span>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Description" value={Description} onChange={(e) => setDescription(e.target.value)} />
                    <span className="error-message">{descriptionError}</span>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Image URL" value={Image_URL} onChange={(e) => setImageURL(e.target.value)} />
                    <span className="error-message">{imageURLError}</span>
                </div>
                <div className="button-group">
                    <button onClick={getProdsButton_click}>Get Products</button>
                    <button onClick={addProdsButton_click}>Add Product</button>
                    <button onClick={updateProdsButton_click}>Update Product</button>
                </div>
            </div>
            <hr />
            <div className="product-container">
                {resultArray}
            </div>
        </>

    );
}

export default BoatCrud;

