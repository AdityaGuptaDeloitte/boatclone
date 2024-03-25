import './App.css';
import ImageCarousel from './components/ImageCarousel';
import { category_videos, review_videos } from './utils/data';

function App() {
  return (
    <div className="maincontainer">
      <ImageCarousel/>

      <h4 style={{marginTop:"20px", marginLeft:"20px"}}>Explore <strong >Bestselle<span style={{textDecorationLine: "underline" , textDecorationColor: "red"}}>rs</span></strong></h4>

      <div class='videoshowcase' >
        {category_videos.map((categoryvideo)=>{
          return <a href={"http://localhost:3000/Products"+categoryvideo.href}><video width={280} height={280} muted="true" title={categoryvideo.title}
          onMouseOver={event => event.target.play()}
          onMouseOut={event => event.target.pause()}
          src={categoryvideo.link} >
        </video></a>
        })}
      </div>

      <br/>

      {/* <div class="card">
        <img class="bannerimg card-img-top" src="https://www.boat-lifestyle.com/cdn/shop/files/Strip_Web_copy_f885e21a-8a07-4edb-a29f-83389f1783d5_700x.png" width="100%" alt="Card image"/>
        <div class="card-img-overlay">
          
          <p class="card-title mt-2 fs-3 text-center text-light">Ends at: 23rd March 8:00PM</p>
        </div>
      </div>
      <br/> */}


      <div class="advantages card-group">
        <div class="oneadv">
          <img src="./Images/warranty.svg" width="120px"/>
          <h5><strong>1 Year</strong> Warranty</h5>
        </div>
        <div class="oneadv">
          <img src="./Images/returns.svg" width="120px"/>
          <h5><strong>7 Day</strong> Replacement</h5>
        </div>
        <div class="oneadv">
          <img src="./Images/shipping.svg" width="120px"/>
          <h5><strong>Free</strong> Shipping</h5>
        </div>
        <div class="oneadv">
          <img src="./Images/gstbilling.svg" width="120px"/>
          <h5><strong>GST</strong> Billing</h5>
        </div>
      </div>
      
      
      <h4 style={{marginTop:"20px", marginLeft:"20px"}}>Join the <strong >Tri<span style={{textDecorationLine: "underline" , textDecorationColor: "red"}}>be</span></strong></h4>
      <div class="card-group">
        {review_videos.map((reviewvideo)=>{
          return <div class="card rounded-top m-2 p-0">
          <video  src={reviewvideo.link} 
          muted="true" 
          height={480}
          autoPlay="true"
          loop="true"/>
          <div class="card-body">
              <h5 class="card-title">{reviewvideo.title}</h5>
              <p><strong style={{fontSize:"20px"}}>{reviewvideo.price}</strong> <span style={{textDecoration: "line-through"}}>{reviewvideo.price * 4}</span> <span class="text-success">75%</span></p>
          </div>
        </div>
        })}
      </div>
    </div>
  );
}

export default App;
