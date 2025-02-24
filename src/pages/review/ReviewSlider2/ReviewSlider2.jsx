import './style.css'
import Slider from 'react-slick';
function ReviewSlider2(){
    var settings = {
        loop:true,
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <section className='container-fluid pt-2 pb-2'>
            <div className='container'>
                <div className='row'>
                    
                    <div className='col-md-12'>

                    <Slider {...settings} className='reviews_card'>
                        <div className='items'>
                            <div className='reviewsCntnt2'>
                                <img src='https://zinmatt.com/wp-content/uploads/2024/03/Review-51-Aiyaz-Alam-min.png' className='img-fluid'/>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='reviewsCntnt2'>
                                <img src='https://zinmatt.com/wp-content/uploads/2024/03/review-77-Brajesh-Singh-Bhadoriya-min.png' className='img-fluid'/>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='reviewsCntnt2'>
                                <img src='https://zinmatt.com/wp-content/uploads/2024/03/review-28-Anuj-Saraf.png' className='img-fluid'/>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='reviewsCntnt2'>
                                <img src='https://zinmatt.com/wp-content/uploads/2024/03/review-29-Arjun-Ramjee-min.png' className='img-fluid'/>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='reviewsCntnt2'>
                                <img src='https://zinmatt.com/wp-content/uploads/2024/03/review-45-Ankita-min.png' className='img-fluid'/>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='reviewsCntnt2'>
                                <img src='https://zinmatt.com/wp-content/uploads/2024/03/review-63-Neelam-Creation-min.png' className='img-fluid'/>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='reviewsCntnt2'>
                                <img src='https://zinmatt.com/wp-content/uploads/2024/03/review-64-Raushan-Kumar-min.png' className='img-fluid'/>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='reviewsCntnt2'>
                                <img src='https://zinmatt.com/wp-content/uploads/2024/03/review-65-Versha-Shukla-min.png' className='img-fluid'/>
                            </div>
                        </div>
                        
                        
                        </Slider>


                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default ReviewSlider2;