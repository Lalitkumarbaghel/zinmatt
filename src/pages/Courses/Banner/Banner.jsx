import './style.css'
import Arrowbanner from '../../../assets/images/banner_arrow.png'
import { Link } from 'react-router-dom';
function Banner(){
    return(
        <section className='container-fluid pt-5 pb-5 lightBg'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-5'>
                        <div className='banner_cnnt'>
                            <h1 className='fs-60'>We've amazing Skills for <span className='orangeclr btm_line'>Teaching</span></h1>
                            <p className='text-grey fb-500 pt-5 line-h-1_4'>At Learn Growth, we’ve mastered the skills to teach digital marketing effectively, empowering you with the tools and knowledge needed for lasting success.</p>
                            <div className='btn-group2 mt-4'>
                                <a href='#' className='btn orngeBtn'>Explore Course</a>
                                <Link to='/downloadpdf' className='btn whitebtn'>Download Brochure</Link>
                            </div>
                            <div className='studentList'>
                                    <img src='https://zinmatt.com/wp-content/uploads/2024/10/Untitled-design-10.png' style={{width:"150px"}} />
                                    <p><span className='orangeclr fb-600'>5,000+</span> Students</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'>
                        <div className='arrow_img'>
                            <img src={Arrowbanner} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src='https://zinmatt.com/wp-content/uploads/2024/10/hero-banner.png' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;