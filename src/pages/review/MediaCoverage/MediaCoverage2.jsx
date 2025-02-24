import React from 'react'
import ReactPlayer from 'react-player'
import './style.css'
import AOS from 'aos';
 import 'aos/dist/aos.css';
import { useEffect } from 'react';
function MediaCoverage2(){
    useEffect(()=>{
                      AOS.init({
                            duration:2000,
                            mirror: true,
                            once: true
                          });
              }, []);
    return(
        <section className='container-fluid pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='videoPlayHead'>Media Coverage</h1>
                    </div>
                </div>
                <div className='row justify-content-center pb-4' data-aos="slide-up">
                    <div className='col-md-12 col-lg-8'>
                        <ReactPlayer className="videoPlay" controls={true} playing={true} url='https://player.vimeo.com/video/941505213?h=bd43607c5e' />
                    </div>
                </div>
                <div className='row' data-aos="slide-up">
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133701.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133900.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133724.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133749.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133846.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133717.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133734.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133759.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133808.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133822.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133838.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133749.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133814.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133830.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133853.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-3 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-133814.png' className='img-fluid' />
                    </div>

                </div>
                <div className='row pt-5' data-aos="slide-up">
                    <div className='col-sm-6 col-md-4 pt-3' >
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-182431.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-4 pt-3'>
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-182446.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-4 pt-3'>
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-182431.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-4 pt-3'>
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-182354.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-4 pt-3'>
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-182431.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-6 col-md-4 pt-3'>
                        <img src='https://zinmatt.com/wp-content/uploads/2024/05/Screenshot-2024-05-01-182916.png' className='img-fluid' />
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default MediaCoverage2;