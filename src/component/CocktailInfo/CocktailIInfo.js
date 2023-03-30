import React from "react";
import { useParams, Link } from "react-router-dom";


const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const CocktailInfo=()=>{
    const { id } = useParams();
	const [loading, setLoading] = React.useState(false);
	const [cocktail, setCocktail] = React.useState(null);

	React.useEffect(() => {
		setLoading(true);
		async function getCocktail() {
			try {
				const response = await fetch(`${url}${id}`);
				const data = await response.json();
				
               
				if (data.drinks) {
					const {
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strInstructions: instructions,
						strVideo:video,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					} = data.drinks[0];

					const ingredients = [
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					];

					const newCocktail = {
						name,
						image,
						info,
						category,
						glass,
						instructions,
						ingredients,
						video,
					};
                    
					setCocktail(newCocktail);
				} else {
					setCocktail(null);
				}
			} catch (error) {
				
			}
			setLoading(false);
		}
		getCocktail();
	}, [id]);



	const getembedURL=url=> {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
		const match = url.match(regExp);
	
		return (match && match[2].length === 11)
		  ? `https://www.youtube.com/embed/${match[2]}`
		  : '';
	}

	if (!cocktail) {
		return <h2 className="section-title">no cocktail to display</h2>;
	}
	const { name, image, info, category, glass, instructions, ingredients,video:videoURL } =
		cocktail;
		
		
	return (
		<section className="container section cocktail-section">
			
			<h2 className="section-title">{name}</h2>
				<div className="col-12">
				{videoURL?
				
					<iframe  src={getembedURL(videoURL)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
					
					:<></>}
				</div>
					
			<div className="drink d-flex flex-column flex-md-row justify-content-evenly mb-5">
					
				<div className="drink-img col-md-6 col-12 text-center">
					<img src={image} alt={name} />
				</div>
				<div className="drink-info col-md-6 col-12">
					<p>
						
						<span className="drink-data">name: </span>
						{name}
					</p>
					<p>
						<span className="drink-data">category: </span>
						{category}
					</p>
					<p>
						<span className="drink-data">info: </span>
						{info}
					</p>
					<p>
						<span className="drink-data">glass: </span>
						{glass}
					</p>
					<p>
						<b className="drink-data">Steps: </b>
						{instructions}
					</p>
					<p>
						<b className="drink-data">ingredients: </b>
						{ingredients.map((item, index) => {
							return item ? <li key={index}>{item}</li>:  null;
						})}
					</p>
					<Link to="/" className="btn btn-primary mt-4 universal-btn">
					<i className="fa-solid fa-arrow-left"></i> back home 
					</Link>
				</div>
			</div>
		</section>)
}