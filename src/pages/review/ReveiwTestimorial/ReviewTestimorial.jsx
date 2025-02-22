import './style.css'
import React from 'react'
import ReactPlayer from 'react-player'
function ReviewTestimorial(){
    
    return(
        <section className='container-fluid pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Testimonial</h1>
                    </div>
                    <div className='col-md-3 pt-3'>
                        <ReactPlayer className="videoPlay" controls={true} width="100%" url='https://player.vimeo.com/video/915100248?h=e03b062724' />
                    </div>
                    <div className='col-md-3 pt-3'>
                        <ReactPlayer className="videoPlay" controls={true} width="100%" url='https://player.vimeo.com/video/920445732?h=adf8f4e5ab' />
                    </div>
                    <div className='col-md-3 pt-3'>
                        <ReactPlayer className="videoPlay" controls={true} width="100%" url='https://player.vimeo.com/video/921450637?h=14a7a8b415' />
                    </div>
                    <div className='col-md-3 pt-3'>
                        <ReactPlayer className="videoPlay" controls={true} width="100%" url='https://player.vimeo.com/video/915106933?h=a8efe4aff2' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewTestimorial;