import { CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
const Navbar = () => {
    return (
        <div className="flex space-y-3 lg:space-y-0 flex-col lg:flex-row justify-between items-center my-7">
            <div>
                <h1 className="text-3xl font-bold hover:scale-105">Recipe Calories</h1>
            </div>
            <div>
                <ul className="[&>li]:inline [&>li]:mx-5 text-gray-700">
                    <li><a className="hover:border-b border-b-black" href="#">Home</a></li>
                    <li><a className="hover:border-b border-b-black" href="#">Recipes</a></li>
                    <li><a className="hover:border-b border-b-black" href="#">About</a></li>
                    <li><a className="hover:border-b border-b-black" href="#">Search</a></li>
                </ul>
            </div>
            <div>
                <div className="flex  justify-between items-center relative">
                    <input className="bg-[#F3F3F5] placeholder:text-gray-700 pl-10 pr-5 py-3 rounded-3xl outline-none" type="text" placeholder="Search" />
                    <button>
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl"/>
                    </button>
                    <div className="p-2 ml-2 rounded-full bg-[#0BE58A] hover:bg-green-500">
            <IoPersonCircleOutline className="text-3xl"/>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;