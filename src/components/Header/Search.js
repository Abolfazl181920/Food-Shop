import React, { useState, useEffect } from 'react';

import { Search } from 'react-ionicons';

import ShowFoods from '../Panel/FoodsApi/ShowFoods';

const SearchInput = () => {

    const APP_ID = "64831bc3";
    const APP_KEY = "8dba4b49296f6e8d7a96c1151083bd55";

    const [ searchValue, setSearchValue ] = useState('');
    const [ query, setQuery ] = useState('chicken');
    const [ foods, setFoods ] = useState([]);

    useEffect(() => {
        getFoods();
    }, [query]);

    const getFoods = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setFoods(data.hits);
    }

    const InputValue = (event) => {
        setSearchValue(event.target.value);
        setQuery(searchValue);
    }

    return (
        <div>
            <input
                value={searchValue}
                onChange={InputValue}
                className="SearchInput p-2.5 text-gray-500 rounded-lg"
                type="text"
                placeholder="search ..."
            />
            
            <Search
                color={'#ffffff'}
                style={{ position: 'absolute', right: '11%', top: '5.2%' }}
            />

            <div className="flex flex-wrap justify-center">
                {
                    foods.map(food => (
                        <ShowFoods
                        key={food.recipe.label}
                        title={food.recipe.label}
                        image={food.recipe.image}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default SearchInput;