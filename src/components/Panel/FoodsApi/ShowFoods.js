import React from 'react';
import { Link } from 'react-router-dom';

const ShowFoods = ({ title, image }) => {
    return (
        <div className="ShowFoodBody rounded-2xl ml-4">
            <div className="w-64 h-72">
                <Link to="/foodsinformation">
                    <img src={image} className="w-32 cursor-pointer rounded-full ml-14 border-4 -mt-8" />
                </Link>
                <h2 className="text-white text-center mt-8 text-xl"> {title} </h2>
                {/* <span>Price: 2500$</span> */}
                <span className="text-indigo-500 animate-pulse ml-24 -mt-32">15% Off</span>
            </div>
        </div>
    );
}

export default ShowFoods;