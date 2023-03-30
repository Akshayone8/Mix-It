import { Footer } from "./component/Footer/Footer";
import { Mainbody } from "./component/MainBody/Mainbody";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CocktailInfo } from "./component/CocktailInfo/CocktailIInfo";
import SearchCocktail from "./component/SearchCocktail/SearchCocktail";
import { Header } from "./component/Header/Header";
import { CardComponent } from "./component/Card/CardComponent";
import { CocktailList } from "./component/CocktailList/CocktailList";
import { Ingredient } from "./component/Ingredients/Ingredients";
import { Error } from "./component/Error/Error";

function App() {
  return (
    <>
      {/* <div className="container"> */}
      
        
        <Router>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Mainbody/>} />
              <Route path="/cocktaillist" element={<CocktailList />} />
              <Route path="/ingredient" element={<Ingredient/>} />
             <Route path="/cocktail/:id" element={<CocktailInfo />} />
             <Route path="/cocktail/search-cocktail" element={<SearchCocktail/>} />
             <Route path="*" element={<Error/>} />
          </Routes>
          <Footer/>
			  </Router>
      {/* </div> */}
    </>
  );
}

export default App;
