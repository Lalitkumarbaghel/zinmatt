import './style.css'
import Slider from 'react-slick';
function HomeReviews(){
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
        <section className='container-fluid pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 pb-4'>
                        <h1 className='text-center head_high'>What Our Students Have to Say!</h1>
                    </div>
                    <div className='col-md-12'>

                    <Slider {...settings} className='reviews_card'>
                        <div className='items'>
                            <div className='reviewsCntnt'>
                                <div className='avtar'>
                                    <div className='img'>L</div>
                                    <div className='info'>
                                        <h6 className='review-head'>Lalit Baghel</h6>
                                        <p className='review-title'>3 reviews</p>
                                    </div>
                                </div>
                                <div className='cntnt'>
                                    <div className='review_star'>
                                        <div className='star_cntnt'>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        </div>
                                        <p>2 Months ago</p>
                                    </div>
                                    <p className='review-txt pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                        <div className='reviewsCntnt'>
                                <div className='avtar'>
                                    <div className='img'>L</div>
                                    <div className='info'>
                                        <h6 className='review-head'>Lalit Baghel</h6>
                                        <p className='review-title'>3 reviews</p>
                                    </div>
                                </div>
                                <div className='cntnt'>
                                    <div className='review_star'>
                                        <div className='star_cntnt'>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        </div>
                                        <p>2 Months ago</p>
                                    </div>
                                    <p className='review-txt pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>

                        </div>
                        <div className='items'>
                            
                        <div className='reviewsCntnt'>
                                <div className='avtar'>
                                    <div className='img'>L</div>
                                    <div className='info'>
                                        <h6 className='review-head'>Lalit Baghel</h6>
                                        <p className='review-title'>3 reviews</p>
                                    </div>
                                </div>
                                <div className='cntnt'>
                                    <div className='review_star'>
                                        <div className='star_cntnt'>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        </div>
                                        <p>2 Months ago</p>
                                    </div>
                                    <p className='review-txt pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>

                        </div>
                        <div className='items'>
                        <div className='reviewsCntnt'>
                                <div className='avtar'>
                                    <div className='img'>L</div>
                                    <div className='info'>
                                        <h6 className='review-head'>Lalit Baghel</h6>
                                        <p className='review-title'>3 reviews</p>
                                    </div>
                                </div>
                                <div className='cntnt'>
                                    <div className='review_star'>
                                        <div className='star_cntnt'>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        </div>
                                        <p>2 Months ago</p>
                                    </div>
                                    <p className='review-txt pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                            
                        <div className='reviewsCntnt'>
                                <div className='avtar'>
                                    <div className='img'>L</div>
                                    <div className='info'>
                                        <h6 className='review-head'>Lalit Baghel</h6>
                                        <p className='review-title'>3 reviews</p>
                                    </div>
                                </div>
                                <div className='cntnt'>
                                    <div className='review_star'>
                                        <div className='star_cntnt'>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        </div>
                                        <p>2 Months ago</p>
                                    </div>
                                    <p className='review-txt pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>
                        </div>
                        <div className='items'>
                        <div className='reviewsCntnt'>
                                <div className='avtar'>
                                    <div className='img'>L</div>
                                    <div className='info'>
                                        <h6 className='review-head'>Lalit Baghel</h6>
                                        <p className='review-title'>3 reviews</p>
                                    </div>
                                </div>
                                <div className='cntnt'>
                                    <div className='review_star'>
                                        <div className='star_cntnt'>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        </div>
                                        <p>2 Months ago</p>
                                    </div>
                                    <p className='review-txt pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>
                        </div>
                        </Slider>


                    </div>
                    <div className='col-md-12'>
                        <div className='readmore text-center'>
                            <a href='#' className='btn btn-primary more'>More Review...</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeReviews;