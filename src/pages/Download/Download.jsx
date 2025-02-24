// import PdfFile from '../../assets/images/Learn-Growth-50-Day-Class-Syllabus-2024.pdf'
import PdfFile from '../../assets/images/Learn-Growth-50-Day-Class-Syllabus-2024.pdf'
function DownloadPdf(){
    function onSubmit(event) {
        const pdfUrl  = PdfFile;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = PdfFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        }
    
    return(
        <section className="container-fluid pt-5 pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                    <form method='post' action='https://formspree.io/f/xqaevzzp' onSubmit={onSubmit}>
                            <div className="form-group pb-3">
                                <input type="text" name='Username' className="form-control"  placeholder="Enter Name" required />
                            </div>
                            <div className="form-group pb-3">
                                <input type="email" name='Useremail' className="form-control"  placeholder="Enter Email" required />
                            </div>
                            <div className="form-group pb-3">
                                <input type="number" name='Usernumber' className="form-control"  placeholder="Enter Mobile Number" required />
                            </div>
                            
                            
                            <button type="submit"  className="btn btn-success"><i class="fa-solid fa-download"></i> Download</button>
                            </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloadPdf;