import React, { useState, useEffect } from 'react';

import { Search } from 'react-ionicons';

import ShowFoods from '../Panel/FoodsApi/ShowFoods';

const SearchInput = () => {

    const APP_ID = "623bd23c";
    const APP_KEY = "57e7c0200cd81c0d0c220088b1f05e8e";

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

    const getSearch = () => {
        setQuery(searchValue);
    }

    return (
        <div className="flex justify-center -mt-14 ml-96">
            <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="SearchInput p-2.5 text-gray-500 rounded-lg"
            type="text"
            placeholder="search ..."
            />

            <button onClick={getSearch}>Search</button>

            <Search
            color={'#ffffff'}
            style={{ position: 'absolute', right: '45.3%', top: '5.5%' }}
            />

            {
                foods.map(food => (
                    <ShowFoods
                    key={food.recipe.label}
                    title={food.recipe.label}
                    calories={food.recipe.calories}
                    image={food.recipe.image}
                    />
                ))
            }

        </div>
    )
}

export default SearchInput;