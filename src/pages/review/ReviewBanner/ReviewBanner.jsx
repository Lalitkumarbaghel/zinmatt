import './style.css'
import Slider from 'react-slick';
function ReviewBanner(){
    var settings = {
        loop:true,
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <section className='container-fluid lightBg'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <div className='reviewBannertxt'>
                            <h1 className='headBn'><span className='orangeclr'>We are Best</span> In Digital Industry</h1>
                            <p className='title-bn'>Discover the Stories Behind Our Glowing Reviews and Testimonials!</p>
                            <div className='banner_icn'>
                                    <img src='https://zinmatt.com/wp-content/uploads/2024/03/Google-map-image.png' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                    <Slider {...settings} className='reviewimg'>
                            <div className="items">
                                <div className='r_img'>
                                    <img src='https://zinmatt.com/wp-content/uploads/2024/03/Wishing-you-an-abundance-of-love-and-riches-this-Diwali.-1.png' className='img-fluid' />
                                </div>
                            </div>
                            <div className="items">
                                <div className='r_img'>
                                    <img className='img-fluid' src='https://zinmatt.com/wp-content/uploads/2024/03/Untitled-design-13.png' />
                                </div>
                            </div>
                            
                    </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewBanner;