import React from "react";


const recipes = [{
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
},
{
    id: "hawaiian-pizza",
    name:"Hawaiian Pizza",
    ingredients:['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
},
{
    id:"humus",
    name:"Humus",
    ingredients:['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
},
]

const List = () => {
    return(
        <div>
            <h2>Recipes</h2>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map(ingredient =>(
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                </div>

            ))}
        </div>
    )
};


export default List;