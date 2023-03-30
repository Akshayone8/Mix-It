import { Link } from "react-router-dom";
import * as img from "../../constants/images";

export const Error=()=>{
    return(
        <div className="container errorComp d-flex flex-column flex-md-row align-items-center">
            <div className="error_txt col-md-6 col-12">
                <h1>404 Error</h1>
                <h3 className="spcl_text">Nothing Seems to be here!!</h3>
                <h4 className="spcl_text">Go Back to <Link to="/">Home</Link></h4>
            </div>
            <div className="error_img col-md-6 col-12 text-center">
                <img src={img.errorPageImg} alt="drink-img"/>
            </div>
        </div>
    )
}