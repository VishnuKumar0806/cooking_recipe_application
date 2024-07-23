// importing react file
import React, { useContext, useEffect, useState } from "react";

// css file
import './SearchFood.css';

import Gif from '../Gif/output-onlinegiftools.gif';

// fontawasome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFilter } from '@fortawesome/free-solid-svg-icons';

//logo
import { AppContext } from "./HomeRouter.js";
import FoodDetails from "./FoodDetails";
import Details from './Details.js';

const SearchFood = () => {

    const { name, setName, setSuggestions, suggestionURL, suggestions, setRecipes, recipeDetailsURL, reccipes } = useContext(AppContext);

    const [clicked, setClicked] = useState(false);
    const [clicked1, setClicked1] = useState(false);

    useEffect(() => {
        const getSuggestions = async () => {
            const data = await fetch(suggestionURL)
            const result = await data.json()
            setSuggestions(result);
            console.log(result);
        }
        const getRecipe = async () => {
            const data = await fetch(recipeDetailsURL);
            const result = await data.json();
            setRecipes(result);
            console.log(result);
        }
        if (!clicked) {
            getSuggestions();
            setClicked1(!clicked)
        } else {
            setSuggestions([])
            getRecipe();
            setClicked1(true)
        }
    }, [name])

    return (
        <React.Fragment>
            <section>
                <div className="SF-search-input">
                    <div>
                        <img src={Gif} />
                        <input type="text" placeholder="Search your food.." onChange={(e) => { setName(e.target.value) }} value={name} />
                        <FontAwesomeIcon icon={faXmark} className="SF-icon" onClick={() => {
                            setName([])
                            setClicked(!clicked)
                            setRecipes([])
                        }}
                        />
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faFilter} className="SF-filter-icons" />Filter</p>
                    </div>
                </div>
                <div className="suggestion">
                    {
                        suggestions?.map((key, value) => (
                            <div key={value} onClick={(e) => {
                                setName(key)
                                setClicked(true)
                            }} className="suggset">
                                <p>{key}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="food-details">
                    {
                        reccipes.count > 0 ? <FoodDetails /> : <Details />
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default SearchFood;