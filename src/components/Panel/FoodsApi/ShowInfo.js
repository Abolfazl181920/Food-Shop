import React, { useState } from 'react';

const ShowInfo = () => {

    const [ foodNumber, setFoodNumber ] = useState(0);
    const [ foodPrice, setFoodPrice ] = useState(0);

    const handleInput = (event) => {
        setFoodNumber(event.target.value);
        let mainPrice = foodNumber * 100;
        setFoodPrice(mainPrice);
    }

    return(
        <div className="flex justify-center">
            <div className="ShowInformation text-center rounded-xl text-gray-400 ml-5 absolute top-52">
                <h3 className="mt-10 font-bold text-3xl"> Food Buy</h3>
                <span className="text-green-500 text-center font-bold absolute top-40 ml-32 text-3xl"> {foodPrice} </span>
                <input
                    onChange={handleInput}
                    value={foodNumber}
                    className="w-60 h-10"
                    type="number"
                    placeholder="Enter number of foods"
                />
                <button className="h-10 w-20 rounded-tr-xl text-white mt-52 bg-indigo-500 cursor-pointer">Buy</button>
            </div>
        </div>
    );
}

export default ShowInfo;