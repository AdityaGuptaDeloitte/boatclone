import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import { dataServiceObj } from "../services/boatdata.service";
import './BoatCrud.css';

function Products(){

    const [productsArray, setProductsArray] = useState([]);
    const location = useLocation();
    
    function appendParam(parameter, order, field){
        var queries = location.search;
        
        if(queries!==""){
            if(new URLSearchParams(queries).get("_sort")){
                queries= queries.replace(new URLSearchParams(queries).get("_sort"),field)
            }
            if(new URLSearchParams(queries).get("_order")){
                queries= queries.replace(new URLSearchParams(queries).get("_order"),order)
                return queries
            }else{
                return queries+"&"+parameter;
            }
        }
        else{
            return queries+"?"+parameter;
        }
    }

    var queryString = location.search;
    console.log(queryString) 

    useEffect(()=>{
        dataServiceObj.getAllProds(`${queryString}`).then((res)=> setProductsArray(res.data));
    },[location.key, queryString])
    
    const prods = productsArray.map((prod)=>{
        return <ProductCard Product_ID={prod.Product_ID} Category={prod.Category} Ratings={prod.Ratings} Image_URL={prod.Image_URL} Name={prod.Name} Price={prod.Price} Description={prod.Description}/>
    })

    return (
        <div style={{backgroundColor:"white"}}>
            <div class="dropdown ms-5 pt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort By
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href={appendParam("_sort=Price&_order=asc","asc","Price")}>Price: Low to High</a></li>
                    <li><a class="dropdown-item" href={appendParam("_sort=Price&_order=desc","desc","Price")}>Price: High to Low</a></li>
                    <li><a class="dropdown-item" href={appendParam("_sort=Name&_order=asc","asc","Name")}>Alphabetical Order: A - Z</a></li>
                    <li><a class="dropdown-item" href={appendParam("_sort=Name&_order=desc","desc","Name")}>Alphabetical Order: Z - A</a></li>
                </ul>
            </div>
            <div class="row row-cols-4 row-cols-md-4 g-4" style={{marginLeft: "10px", marginRight:"10px"}}>
                {prods}
            </div>
        </div>
    )
}
export default Products


