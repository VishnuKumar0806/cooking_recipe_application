import React, { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// routing files
import Homepage from '../Components/Homepage.js'
import SearchFood from "../Components/SearchFood.js";
import FoodRecipe from "./FoodRecipe.js";

// declaring context and exporting
export const FoodContext = createContext(null);
export const AppContext = createContext(null);

const HomeRouter = () =>{

    const [ name , setName ] = useState("");
    const [ finalName , setFinalName ] = useState("");
    const [ suggestions , setSuggestions ] = useState([]);
    const [ reccipes , setRecipes ] = useState([]);
    const [ value , setValue ] = useState([]);
    
    const suggestionURL = `https://api.edamam.com/auto-complete?app_id=f5e4e480&app_key=2bef5edcd990b3624390e051419de99e&q=${name}&limit=15`;
    const recipeDetailsURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=2fbe98b2&app_key=aacb3d0eeab971e1a213f685d6cfcb27&ingr=50&random=false`;
   
    return(
        <React.Fragment>
            <Router>
                <nav>
                    <ul>
                        <li><Link to={""}></Link></li>
                    </ul>
                </nav>
                <div>
                    <AppContext.Provider value={{name,setName,suggestions,setSuggestions,reccipes,setRecipes,suggestionURL,recipeDetailsURL,finalName,setFinalName,value,setValue}}>
                        <Routes>
                            <Route exact path='' element={<Homepage/>}/>
                            <Route path='search' element={<SearchFood/>}/>
                            <Route path="search/key" element={<FoodRecipe/>}/>
                        </Routes>
                    </AppContext.Provider>
                </div>
            </Router>
        </React.Fragment>
    )
}

export default HomeRouter;