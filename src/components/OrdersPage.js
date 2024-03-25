import axios from 'axios';
import React, { useEffect, useState } from 'react';
 
function OrdersPage() {
    const [orders, setOrders] = useState([]);
 
    useEffect(() => {
                axios.get("http://localhost:3500/orders").then((res)=>{
                    setOrders(res.data)
                })
    }, []);
 
    return (
<div className="orders-page">
        <h2><span style={{color:"green"}}>Payment Successful!</span> Order Placed</h2>
</div>
    );
}
 
export default OrdersPage;