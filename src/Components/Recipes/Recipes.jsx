import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cook from "../Cook/Cook";
import { toast } from 'react-toastify';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([])
    useEffect(() => {
        fetch('Recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])


    const handleWantToCookButton = (recipe) => {
        if (wantToCook.some(item => item.name === recipe.name)) {
            toast.error('Recipe already selected !');
        } else {
            setWantToCook([...wantToCook, recipe]);
            toast.success('Recipe added to Cook list !');
        }

    };


    return (
        <div className="flex gap-5 flex-col md:flex-row">
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                {recipes.map((recipe, index) => (
                    <div key={index} className="w-full h-auto">
                        <Recipe recipe={recipe} handleWantToCookButton={handleWantToCookButton} />
                    </div>
                ))}
            </div>
            <Cook wantToCook={wantToCook}></Cook>
        </div>
    );
};

export default Recipes;