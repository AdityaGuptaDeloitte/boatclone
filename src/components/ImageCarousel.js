function ImageCarousel(){
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval='2000'>
                            <a href="http://localhost:3000/Products"><img class="d-block w-100" src=".\Images\Homepage_Banner___Liquidation_Product_WEB_1600x.jpg" alt="First slide"/></a>
                            </div>
                            <div class="carousel-item" data-bs-interval='2000'>
                            <a href="http://localhost:3000/Products"><img class="d-block w-100" src=".\Images\RS_Banner_WEB_1_1440x.jpg" alt="Second slide"/></a>
                            </div>
                            <div class="carousel-item" data-bs-interval='2000'>
                            <a href="http://localhost:3000/Products?Category=Airdopes"><img class="d-block w-100" src=".\Images\RS_Banner_WEB_2_1440x.jpg" alt="Third slide"/></a>
                            </div>
                            <div class="carousel-item" data-bs-interval='2000'>
                            <a href="http://localhost:3000/Products?Category=Speaker"><img class="d-block w-100" src=".\Images\Stone_SPINX_PRO_HP_Banner_WEB_1_1600x.jpg" alt="Third slide"/></a>
                            </div>
                        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default ImageCarousel;