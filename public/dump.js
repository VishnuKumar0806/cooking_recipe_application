// const Homepage = () => {
    // const [ data , setData ] = useState("");

    // const [ recipe , setRecipe ] = useState([]);
  
    // const [status , setStatus ] = useState(false);
  
    // const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${data}&app_id=2fbe98b2&app_key=aacb3d0eeab971e1a213f685d6cfcb27`;
  
    //   useEffect(()=>{
    //     const fetchRecipeData = async () =>{
    //       const response = await fetch(url);
    //       const result = await response.json();
    //       console.log(result.hits);
    //       setRecipe(result.hits);
    //     }
    //     if(status){
    //       fetchRecipeData();
    //     }
    //   },[status])
  
    // return(
    //   <React.Fragment>
    //     <div>
    //       <input placeholder="Enter your recipe name !" value={data} onChange={(e)=>setData(e.target.value)}/>  
    //       <button onClick={()=>setStatus(!status)}>Search !</button>
    //     </div>
    //     <div>
    //       {
    //         status && 
    //         recipe.map((value,id)=>{
    //           return(
    //             <div key={id}>
    //               <h1>{value.recipe.label}</h1>
    //               <p>{value.recipe.mealType}
    //               <a href={value.recipe.url} target="_blank">click me to know more</a>
    //               </p>
    //               <img src={value.recipe.image}/>
    //               <p>Calories : {Math.round(value.recipe.calories)}</p>
    //               <p>cuisineType : {value.recipe.cuisineType}</p>
    //               <p>Dish type : {value.recipe.dishType}</p>
    //               <p>ingredientLines : {value.recipe.ingredientLines.map((value,id)=>{
    //                 return(
    //                   <>
    //                     <ul key={id}>
    //                       <li>{value}</li>
    //                     </ul>
    //                   </>
    //                 )
    //               })}</p>
    //               <p>ingredients : {value.recipe.ingredients.map((value,id)=>{
    //                 return(
    //                   <>
    //                     <ul>
    //                       <li>{value.text}</li>
    //                       <li>Item : {value.food}</li>
    //                       <li>foodCategory : {value.foodCategory}</li>
    //                       <li>measure : {value.measure} quantity : {value.quantity}</li>
    //                       <li>weight : {value.weight}</li>
    //                       </ul>
    //                   </>
    //                 )
    //               })}</p>
    //               <p>Making time : {value.recipe.totalTime}</p>
    //               <hr/>
    //             </div>
    //           )
    //         })
    //       }
    //     </div>
    //   </React.Fragment>
    // )
//     return(
//         <>
//             <SearchFood/>
//         </>
//     )
// }




   // https://api.edamam.com/search?q=chicken&app_id=8b3e1b14&app_key=6b543f4e7f4de48ccc171cc705b96ec9&from=0&to=3&calories=591-722&health=alcohol-free

    // https://api.edamam.com/search?q=chicken&app_id=8b3e1b14&app_key=6b543f4e7f4de48ccc171cc705b96ec9
 