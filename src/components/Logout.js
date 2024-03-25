import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(){

    let navigate = useNavigate();
    sessionStorage.removeItem('user-token');
    sessionStorage.removeItem('user-name');
    sessionStorage.removeItem('admin-token');

    useEffect(()=>{
        return navigate('/')
    },[])
   
}
export default Logout;