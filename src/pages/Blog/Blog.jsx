import './style.css'
function Blog(){
    return (
        <section className='container-fluid pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    {/* <div className='row'> */}
                        <div className='col-md-12 pb-3'>
                            <h1 className='orangeclr'>Digital Marketing</h1>
                        </div>
                    {/* </div> */}
                    <div className='col-md-4 pt-2'>
                    <div className="card blog-card" >
                            <img src="https://zinmatt.com/wp-content/uploads/2024/06/image-5.jpeg" className="card-img-top" alt="..." />
                            
                            <div className="card-body">
                                <a className="card-title blogHead" href='#'>Monetize Your Website: Google’s Guidelines 2024 – Dos and Don’ts</a>
                                    <p className='blogTime'>June 21, 2024 //// No Comments</p>
                                <p className="card-text headDes">Introduction In the digital era, website monetization has become a pivotal strategy for creators and entrepreneurs. It’s the process of.</p>
                                <a href='#' className='Blog-Read'>Read More</a>
                            </div>
                            </div>
                    </div>
                    <div className='col-md-4 pt-2'>
                    <div className="card blog-card" >
                            <img src="https://zinmatt.com/wp-content/uploads/2024/04/image-10.jpeg" className="card-img-top" alt="..." />
                            
                            <div className="card-body">
                                <a className="card-title blogHead" href='#'>Digital Marketing Course in Patna | Zinmatt: The Best Learning Platform</a>
                                    <p className='blogTime'>June 21, 2024 //// No Comments</p>
                                <p className="card-text headDes">Introduction Digital marketing course in Patna: Zinmatt, founded in 2022 by Manish Rawat, is a leading platform offering comprehensive training</p>
                                <a href='#' className='Blog-Read'>Read More</a>
                            </div>
                            </div>
                    </div>
                    <div className='col-md-4 pt-2'>
                    <div className="card blog-card" >
                            <img src="https://zinmatt.com/wp-content/uploads/2024/06/image-2.jpeg" className="card-img-top" alt="..." />
                            
                            <div className="card-body">
                                <a className="card-title blogHead" href='#'>Top WordPress Themes for Blogging, Businesses and E-commerce in 2024</a>
                                    <p className='blogTime'>June 21, 2024 //// No Comments</p>
                                <p className="card-text headDes">Introduction  Welcome to our comprehensive guide on the best WordPress themes for blogging, business, E-commerce and many more in 2024.</p>
                                <a href='#' className='Blog-Read'>Read More</a>
                            </div>
                            </div>
                    </div>

                    <div className='col-md-12 pt-5'>
                    <nav aria-label="Page navigation example ">
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                        </nav>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Blog;