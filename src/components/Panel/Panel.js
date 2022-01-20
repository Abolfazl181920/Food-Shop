import React from 'react';
import { Link } from 'react-router-dom';

import { Home, FastFoodOutline, InformationCircleOutline, PricetagsOutline, CartOutline, SettingsOutline, ChatbubbleEllipsesOutline } from 'react-ionicons';

const iconStyle = {
    marginTop: '15px',
    marginLeft: '12px'
}

const Panel = () => {
    return (
        <>
            <div className="navigation z-10">
                <ul>
                    <li className="list active">
                    <b></b>
                    <b></b>
                <div className="a">
                <Link to="/">
                    <span className="icon">
                        <Home
                            style={iconStyle}
                            color={'#ffffff'}
                            height="25px"
                            width="25px"
                        />
                    </span>
                    <span className="title">Home</span>
                </Link>
                </div>
                </li>
        <li className="list">
            <b></b>
            <b></b>
            <div className="a">
            <Link to="/food">
                <span className="icon">
                    <FastFoodOutline
                        style={iconStyle}
                        color={'#00000'}
                        height="25px"
                        width="25px"
                    />
                </span>
                <span className="title">Foods</span>
            </Link>
            </div>
        </li>

        <li className="list">
            <b></b>
            <b></b>
            <div className="a">
            <Link to="/information">
            <span className="icon">
                <InformationCircleOutline
                    style={iconStyle}
                    color={'#00000'}
                    height="25px"
                    width="25px"
                />
            </span>
            <span className="title">Information</span>
            </Link>
            </div>
        </li>

        <li className="list">
            <b></b>
            <b></b>
            <div className='a'>
            <Link to="/off">
                <span className="icon">
                    <PricetagsOutline
                        style={iconStyle}
                        color={'#00000'}
                        height="25px"
                        width="25px"
                    />
                </span>
                <span className="title">Off code</span>
            </Link>
            </div>
        </li>

        <li className="list">
            <b></b>
            <b></b>
            <div className="a">
            <Link to="/buy">
                <span className="icon">
                <CartOutline
                    style={iconStyle}
                    color={'#00000'}
                    height="25px"
                    width="25px"
                />
                </span>
                <span className="title">Buy Food</span>
            </Link>
            </div>
        </li>

        <li className="list">
            <b></b>
            <b></b>
            <div className="a">
            <Link className='a' to="/message">
            <span className="icon">
                <ChatbubbleEllipsesOutline
                    style={iconStyle}
                    color={'#00000'}
                    height="25px"
                    width="25px"
                />
            </span>
            <span className="title">Message</span>
            </Link>
            </div>
        </li>

        <li className="list">
            <b></b>
            <b></b>
            <div className="a">
            <Link to="/setting">
            <span className="icon">
                <SettingsOutline
                    style={iconStyle}
                    color={'#00000'}
                    height="25px"
                    width="25px"
                />
            </span>
            <span className="title">Setting</span>
            </Link>
            </div>
        </li>
    </ul>
  </div>
    <div className="toggle"></div>
        </>
    );
}

export default Panel;