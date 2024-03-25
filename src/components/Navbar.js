import { Link, useNavigate } from "react-router-dom";
import NavCategory from "./NavCategory";
import categoriesArray from "../utils/data"
import { useEffect, useState } from "react";


function Navbar(){

    const [searchelement, setSearchelement] = useState("");
    const navigate = useNavigate();

    function search(event){
      setSearchelement(event.target.value);
    }

    const handleValueChange = () => {
      

      var istyping = searchelement===""?false:true;
      if(istyping){
        if(searchelement.length >=3)
          {
            navigate(`/Products?q=${searchelement}`)
          }
        else{
          navigate('/Products')
        }
      }
      
    }
  
    useEffect(() => {
      handleValueChange();
    }, [searchelement]);

    const categories = categoriesArray.map((category)=>{
        return <li><Link class="dropdown-item" to={category.link}><NavCategory image={category.image} category={category.category}/></Link></li>
    })

    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link to='/' ><img class="p-2" src='./Images/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg' width={100} height={60} alt='logo'/></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              {categories}
            </ul>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/Products">Products</Link>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchelement} onChange={event=>{ search(event)}} onKeyDown={event=>{ search(event)}} onPaste={event=>{ search(event)}} onInput={event=>{ search(event)}}/>
        </form>
        <div className="navbar-cart">
            <Link to="/Cart" className="cart-button">Cart</Link>
        </div>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:3000/Login">{!sessionStorage.getItem('user-name')?"Login":sessionStorage.getItem('user-name').toUpperCase()}</a>
          </li>
          <li class="nav-item">
              
              <a class="nav-link active" aria-current="page" href={"http://localhost:3000/"+!sessionStorage.getItem('user-name')?"Logout":"Register"}>{!sessionStorage.getItem('user-name')?"Register":"Logout"}</a>
          </li>
        </ul>
      </div>
    </div>  
    </nav>
    )
}
export default Navbar;