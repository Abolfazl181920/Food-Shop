import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { HeartOutline } from 'react-ionicons';

const ShowFoods = ({ title, image, key }) => {

    const [ likedColor, setLikedColor ] = useState('#FFFFFF');
    const [ liked, setLiked ] = useState(true);

    const handleLikedItem = () => {
        setLiked(!liked);
        setLikedColor('#FF0000');
    }

    return (
        <div className="ShowFoodBody rounded-2xl ml-4">
            <div className="w-64 h-72">
                <Link to="/foodsinformation">
                    <img src={image} className="w-32 cursor-pointer rounded-full ml-14 border-4 -mt-8" />
                </Link>
                <h2 className="text-white text-center mt-8 text-xl"> {title} </h2>
                <span className="text-indigo-500 animate-pulse ml-24 -mt-32">15% Off</span>

                    <HeartOutline
                        key={key}
                        onClick={handleLikedItem}
                        style={{ marginLeft: '200px', marginTop: '30px', cursor: 'pointer' }}
                        color={likedColor}
                        height="27px"
                        width="27px"
                    />
            </div>
        </div>
    );
}

export default ShowFoods;