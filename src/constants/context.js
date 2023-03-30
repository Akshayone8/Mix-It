import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("a");
	const [cocktails, setCocktails] = useState([]);
	
	const fetchDrinks = useCallback(async () => {
		
		try {
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			const { drinks } = data;
			console.log(data)
			if (drinks) {
				const newCocktails = drinks.map((item) => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
						item;
					return {
						idDrink: idDrink,
						strDrink: strDrink,
						strDrinkThumb: strDrinkThumb,
						strAlcoholic: strAlcoholic,
						strGlass: strGlass,
					};
				});
				setCocktails(newCocktails);
			} else {
				setCocktails([]);
			}
			setLoading(false);
		} catch (error) {
			
			setLoading(false);
		}
	}, [searchTerm]);

	useEffect(() => {
		fetchDrinks();
	}, [searchTerm, fetchDrinks]);

	return (
		<AppContext.Provider
			value={{ loading, searchTerm, cocktails, setCocktails, setSearchTerm }}
		>
			{children}
		</AppContext.Provider>
	);
};


export const useGlobalContext = () => {
	
	return useContext(AppContext);
};

export { AppContext, AppProvider };
