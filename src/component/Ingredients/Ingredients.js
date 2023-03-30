// random_API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
import React,{useEffect,useState} from "react";
import { CardComponent } from "../Card/CardComponent";
import { useParams, Link } from "react-router-dom";

export const Ingredient=()=>{
       
    const [fetchData,setFetchData] = useState([]);
    const [testing,setTesting] = useState("Gin");
        
  let random_API = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${testing}`;
    
    const gatRandomData = async()=>{
        const resp=await fetch(random_API);
        const data = await resp.json()
        setFetchData(data.drinks);
    }

    useEffect(()=>{
        gatRandomData()
    },[testing])

    const handleSubmit = (e) => {
		e.preventDefault();
	};

    const searchCocktail = (e)=>{
        console.log(e.target.value)
        setTesting(e.target.value)
    }

    return (

            <div className="container col-12">
            <form className="search-form text-end" onSubmit={handleSubmit}>
                <input
                            type="text"
                            id="name"
                            onChange={searchCocktail}
                            placeholder="Search by Ingredients"
                />
                 
            </form>
			<div className="card-section d-flex flex-wrap justify-content-around">
                    {
                        fetchData.map(displayItems=><CardComponent {...displayItems} key={displayItems.idDrink}/>
                        ) 
                    }
            </div>
            </div>
    )
}