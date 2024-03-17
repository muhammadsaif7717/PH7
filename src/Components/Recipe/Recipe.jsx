import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';


const Recipe = ({ recipe, handleWantToCookButton }) => {
    const { name, image, description, ingredients, preparing_time, calories } = recipe;


    return (
        <>
            <div className="border rounded-xl p-7 space-y-3 hover:shadow-lg h-max">
                <img src={image} className='rounded-xl' />
                <h1 className='font-bold text-xl'>{name}</h1>
                <p className='text-gray-500 text-sm'>{description}</p>
                <hr />
                <div>
                    <h1 className="font-bold">ingredients: {ingredients.length}</h1>
                    {ingredients.map((ingredient, index) => (
                        <div key={index}><li className='text-sm pl-5 text-gray-500'>{ingredient}</li></div>
                    ))}
                </div>
                <hr />
                <div className="flex justify-between">
                    <div className='text-gray-500 text-sm flex items-center'><IoMdTime /> &nbsp;  {preparing_time} minutes</div>
                    <div className='text-gray-500 text-sm flex items-center'><FaFire /> &nbsp; {calories} calories</div>
                </div>
                <button onClick={() => handleWantToCookButton(recipe)} className="rounded-full bg-[#0BE58A] py-2 px-3 hover:bg-green-500">Want to Cook</button>

            </div>
        </>
    );
};



Recipe.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired
    }).isRequired,
    handleWantToCookButton: PropTypes.func.isRequired,
};
export default Recipe;