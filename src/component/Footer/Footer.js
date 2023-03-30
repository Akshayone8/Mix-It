export const Footer=()=> {
    const current_date=new Date().getFullYear();
return(
    <div className="footer">
        <div className="container fo-subsection d-flex flex-column flex-md-row justify-content-between text-center text-md-start">
        <p className="flex-fill text-muted">Copyright ©{current_date}. Cabana Inc. </p>
        <div className="fo-links flex-fill d-flex justify-content-around">
            <a href="/" className="font-weight-normal text-dark">Privacy Policy</a>
            <a href="/" className="font-weight-normal text-dark">Terms of Service</a>
            <a href="/" className="font-weight-normal text-dark">Cookies Settings</a>
        </div>
        </div>
    </div>
    
)
}