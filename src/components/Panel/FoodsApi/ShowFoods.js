import React from 'react';

const ShowFoods = ({ title, calories, image }) => {
    return (
        <div className="ShowFoodBody flex flew-wrap rounded-2xl ml-4">
            <div className="w-52">
                <img src={image} className="w-32 cursor-pointer rounded-full ml-8 -mt-8" />
                <h2 className="text-white text-center mt-8 text-3xl"> {title} </h2>
            </div>
        </div>
    );
}

export default ShowFoods;