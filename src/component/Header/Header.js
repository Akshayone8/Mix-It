import React from "react";
import { useGlobalContext } from "../../constants/context";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Header=()=>{
    const { setSearchTerm } = useGlobalContext();
	
	const searchValue = React.useRef("");

	React.useEffect(() => {
		searchValue.current.focus();
	}, []);

	const searchCocktail = () => {
        
		setSearchTerm(searchValue.current.value);
	};

	
    return(
        <div className="container header d-flex justify-content-between align-items-center">
            <a href="/"><h4 className="logo">MiX !T</h4></a>
            	<form className="search-form" >
            <div className="d-flex align-items-center">
			<div className="search-input me-2">
            <input
						type="text"
						id="name"
						ref={searchValue}
						placeholder="Search Cocktail"
			/>
			<Link to="/cocktail/search-cocktail" className="btn" onClick={searchCocktail}><li className="fas fa-search"></li></Link>
			</div>
				<DropdownButton id="dropdown-basic-button" title="" >
					<Dropdown.Item href="/cocktaillist">Cocktail</Dropdown.Item>
					<Dropdown.Item href="/ingredient">Ingredient</Dropdown.Item>
				</DropdownButton>
			
            </div>
            </form>
        </div>
    )
}

