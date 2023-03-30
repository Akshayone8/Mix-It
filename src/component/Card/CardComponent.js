import React from "react";
import { Link } from "react-router-dom";

export const CardComponent=({strDrinkThumb,strDrink,idDrink})=>{
  
    return(
       
        <div className="card-comp">
            <Link to={`/cocktail/${idDrink}`}> 
                <div className="card">
                    <img src={strDrinkThumb} alt={strDrink}/>
                    <h3 className="mt-2">{strDrink}</h3>
                </div>
            </Link>  
        </div>
        
        
    )
}