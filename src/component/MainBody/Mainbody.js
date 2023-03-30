import React,{useEffect,useState} from "react";
import * as img from "../../constants/images";
import { CardComponent } from "../Card/CardComponent";
import { useNavigate } from "react-router-dom";


const random_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const random_API2 = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export const Mainbody=()=>{
    const navigate = useNavigate();
    const [fetchData,setFetchData] = useState([]);

    const gatRandomData = async()=>{
        const resp=await fetch(random_API);
        const data = await resp.json()
        setFetchData(data.drinks);
    }

    useEffect(()=>{
        gatRandomData()
    },[])

    const sugestCocktail=async()=>{
        const response=await fetch(random_API2);
        const data = await response.json()
        const {drinks}= data;
        navigate(`/cocktail/${drinks[0].idDrink}`)
    }


    const newFetchData = fetchData.slice(0,10);

    
    return(
        <>
            <div className="container">
            <div className="d-flex flex-column flex-md-row align-items-md-center">
                <div className="jumbo-1 col-md-6 col-12">
                    <img src={img.homePageImg} alt="Homepage " className="jumbo-img"/>
                </div>
                <div className="jumbo-txt col-md-6 col-10">
                    <h1>MixIt.<br/><span className="spcl_text">Impress Your Guests <br/> with Our Recipes.</span></h1>
                    <button  className="btn btn-primary universal-btn" onClick={sugestCocktail}>Suggest Cocktail</button>
                 
                </div>
            </div>
            </div>
            
                <div className="cocktail-header">
                    <h1>Trending Cocktails</h1>
                </div>
                <div className="container col-12 card-section d-flex flex-wrap justify-content-around">
                    {
                        newFetchData.map(displayItems=><CardComponent {...displayItems} key={displayItems.idDrink}/>
                        ) 
                    }
                </div>
           
            </>
    )
}