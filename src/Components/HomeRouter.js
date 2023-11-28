import React, { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// routing files
import Homepage from '../Components/Homepage.js'
import SearchFood from "../Components/SearchFood.js";
import FoodRecipe from "./FoodRecipe.js";

// declaring context and exporting
export const FoodContext = createContext(null);
export const AppContext = createContext(null);

const HomeRouter = () => {

    const [name, setName] = useState("");
    const [finalName, setFinalName] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [reccipes, setRecipes] = useState([]);
    const [value, setValue] = useState([]);

    const suggestionURL = `https://api.edamam.com/auto-complete?app_id=081cadb7&app_key=5a31214de35b6be77698f57ab9b8a776&q=${name}`;
    const recipeDetailsURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=5555cdd5&app_key=31ecbe1d8c0fe7634237b6249f5397d5&ingr=15`;

    return (
        <React.Fragment>
            <Router>
                <nav>
                    <ul>
                        <li><Link to={""}></Link></li>
                    </ul>
                </nav>
                <div>
                    <AppContext.Provider value={{ name, setName, suggestions, setSuggestions, reccipes, setRecipes, suggestionURL, recipeDetailsURL, finalName, setFinalName, value, setValue }}>
                        <Routes>
                            <Route exact path='' element={<Homepage />} />
                            <Route path='search' element={<SearchFood />} />
                            <Route path="search/key" element={<FoodRecipe />} />
                        </Routes>
                    </AppContext.Provider>
                </div>
            </Router>
        </React.Fragment>
    )
}

export default HomeRouter;