import React, { useContext } from "react";
import { AppContext } from "./HomeRouter";
import './FoodRecipe.css';

import Headlogo from '../Images/burger.png';
import Cuisine from '../Images/cusine.png';
import Type from '../Images/Type.png';
import Calories from '../Images/calories.png';
import DishType from '../Images/Type.png';
import Ingredients from '../Images/ingredients.png';
import HealthLabels from '../Images/health.png';
import IngrediantImaage from '../Images/fitness.png'

const FoodRecipe = () => {

    const { value } = useContext(AppContext);

    const handleSwwiggy = (value) => {
        window.open('https://www.swiggy.com/search?query=' + value)
    }

    return (
        <React.Fragment>
            <div className="FR-main-content">
                <div className="FR-class">
                    <img src={Headlogo} />
                    <h1>{value.recipe.label}</h1>
                    <a href={value.recipe.url} target="_blank">Click here</a>
                    <button onClick={() => handleSwwiggy(value.recipe.label)}>Swiggy</button>
                </div>
                <div className="FR-content">
                    <p><img src={Cuisine} /> Cuisine : {value.recipe.cuisineType}</p>
                    <p><img src={Type} /> Type : {value.recipe.mealType}</p>
                    <p><img src={Calories} />Total calories : {value.recipe.calories}</p>
                    <p><img src={DishType} />Dish type : {value.recipe.dishType}</p>
                    <p><img src={Ingredients} />ingredients : {value.recipe.ingredientLines.length}</p>
                    <p><img src={HealthLabels} />healthLabels : {value.recipe.healthLabels.length}</p>
                </div>
                <div className="FR-lists">
                    <div className="Healthlabels-lists">
                        <span>
                            <img src={IngrediantImaage} />
                            <p>healthLabels</p>
                        </span>
                        <span>
                            {
                                value.recipe.healthLabels.map((value, key) => {
                                    return (
                                        <li>{value}</li>
                                    )
                                })
                            }
                        </span>
                    </div>
                    <div className="Ingredients-lists">
                        <span>
                            <img src={IngrediantImaage} />
                            <p>ingredients</p>
                        </span>
                        <span>
                            {
                                value.recipe.ingredients.map((value, key) => {
                                    return (
                                        <div className="IN-lists" key={key}>
                                            <img src={value.image} className="IN-image" />
                                            <li className="IN-list0">{value.food} ( {value.foodCategory} )</li>
                                            <li className="IN-list1">{value.text}</li>
                                            <li className="IN-list2">{Math.round(value.weight)} gram</li>
                                        </div>
                                    )
                                })
                            }
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FoodRecipe;