import React, { useContext, useEffect } from "react";
import { AppContext } from "./HomeRouter";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import './FoodDetails.css';

const FoodDetails = () => {

    const { name,reccipes } = useContext(AppContext);
    console.log(reccipes)

    return(
        <React.Fragment>
            <div className="FD-main-content">
                <div className="FD-search-details">
                    <p>Food name : {name}</p>
                    <p>Search results :   {reccipes.count < 10  ? `"${reccipes.count}"` : "10+"}</p>    
                </div>
                <div className="FD-main">
                    {
                        reccipes.count>0 &&
                        reccipes.hits.map((value,key)=>{
                            return(
                                <div className="FD-content">
                                    <p>{key+1} : {value.recipe.label}</p>
                                    <img src={value.recipe.image} alt="image"/>
                                    <p>Cuisine type : {value.recipe.cuisineType}</p>
                                    <p>Type : {value.recipe.mealType}</p>
                                    <p>Total calories : {value.recipe.calories}</p>
                                    <p>Cautions : {value.recipe.cautions}</p>
                                    <p>Diet lables : {value.recipe.dietLabels}</p>
                                    <p>Dish type : {value.recipe.dishType}</p>
                                    <p>ingredientLines : </p>
                                    {

                                        value.recipe.ingredientLines.map((value,key)=>{
                                            return(
                                                <>
                                                    <li>{value}</li>
                                                </>
                                            )
                                        })

                                    }
                                    <p>healthLabels : </p>
                                    {

                                        value.recipe.healthLabels.map((value,key)=>{
                                            return(
                                                <>
                                                    <li>
                                                        {value}
                                                    </li>
                                                </>
                                            )
                                        })

                                    }
                                    <p className="FD-more">
                                        <Link to='/key'>Click me to more details</Link>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </React.Fragment>
    )
}

export default FoodDetails;