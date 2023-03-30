import React from "react";
import {CardComponent} from "../Card/CardComponent";
import { useGlobalContext } from "../../constants/context";

const SearchCocktail = () => {
	const { cocktails } = useGlobalContext();
	
	
	if (cocktails.length < 1) {
		return <h2 className="section-title">no cocktails match your criteria</h2>;
	}
	return (
		<section className="container section">
			<h1 className="section-title cocktail-header">Searched Result</h1>
			<div className="cocktails-center mt-3 d-flex flex-wrap justify-content-around">
				{cocktails.map((item) => {
					return <CardComponent key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
};

export default SearchCocktail;
