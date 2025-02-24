import './style.css'
import React from 'react'
import ReactPlayer from 'react-player'
function LiveClassReview(){
    
    return(
        <section className='container-fluid pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Live Class Review</h1>
                    </div>
                    <div className='col-md-6 pt-2'>
                        <ReactPlayer className="videoPlay2" controls={true} width="100%" url='https://player.vimeo.com/video/941505213?h=bd43607c5e' />
                    </div>
                    <div className='col-md-6 pt-2'>
                        <ReactPlayer className="videoPlay2" controls={true} width="100%" url='https://player.vimeo.com/video/941505213?h=bd43607c5e' />
                    </div>
                    <div className='col-md-6 pt-2'>
                        <ReactPlayer className="videoPlay2" controls={true} width="100%" url='https://player.vimeo.com/video/941505213?h=bd43607c5e' />
                    </div>
                    <div className='col-md-6 pt-2'>
                        <ReactPlayer className="videoPlay2" controls={true} width="100%" url='https://player.vimeo.com/video/941505213?h=bd43607c5e' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiveClassReview;