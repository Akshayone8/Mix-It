import React,{useEffect,useState} from "react";
import { CardComponent } from "../Card/CardComponent";

export const CocktailList =()=>{
    
    const [fetchData,setFetchData] = useState([]);
    const [testing,setTesting] = useState("Non_Alcoholic");
        
  let random_API = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${testing}`;
    
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
        setTesting(e.target.value)
    }

    return (

            <div className="container col-12 ">
            <form className="search-form text-end" onSubmit={handleSubmit}>
                <input
                            type="text"
                            id="name"
                            onChange={searchCocktail}
                           placeholder="search cocktail"
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