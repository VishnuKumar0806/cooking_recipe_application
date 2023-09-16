import React, { useContext } from "react";
import { AppContext } from "./HomeRouter";
import { Link } from 'react-router-dom';
import './FoodDetails.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Geologica:wght@100&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Yuji+Hentaigana+Akari&display=swap');@import url('https://fonts.googleapis.com/css2?family=Monomaniac+One&display=swap');
</style>

const FoodDetails = () => {
    const { name, reccipes , setValue } = useContext(AppContext);
    return(
        <React.Fragment>
            <div className="FD-search-details">
                <p>Food name : {name}</p>
                <p>Search results :   {reccipes.count < 10  ? `"${reccipes.count}"` : "10+"}</p>    
            </div>
            <div className="FD-main">
                {
                    reccipes.count>0 &&
                    reccipes.hits.map((value,key)=>{
                        return(
                            <Link to="key" onClick={()=>{setValue(value)}}>
                                <div className="FD-content">
                                    <h1 className="foodName">{value.recipe.label}</h1>
                                    <img src={value.recipe.image} alt="image" className="foodImage"/>
                                    <p className="foodCuisine">Cuisine : {value.recipe.cuisineType}</p>
                                    <p className="foodType">Type : {value.recipe.mealType}</p>
                                    <p className="foodCalories">Total calories : {Math.round(value.recipe.calories)}</p>
                                    <p className="foodDish">Dish type : {value.recipe.dishType}</p>
                                    <p className="foodIngredients">ingredients : {value.recipe.ingredientLines.length}</p>
                                    <p className="foodHealths">healthLabels : {value.recipe.healthLabels.length}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default FoodDetails;