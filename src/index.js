import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';

import App from './App';
import Food from './components/Panel/Food';
import Info from './components/Panel/Info';
import Message from './components/Panel/Message';
import Off from './components/Panel/Off';
import Buy from './components/Panel/Buy';
import Setting from './components/Panel/Setting';
import ShowInfo from './components/Panel/FoodsApi/ShowInfo';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={ <App /> } exact />
        <Route path="/food" element={ <Food /> } />
        <Route path="/information" element={ <Info /> } />
        <Route path="/message" element={ <Message /> } />
        <Route path="/off" element={ <Off /> } />
        <Route path="/buy" element={ <Buy /> } />
        <Route path="/setting" element={ <Setting /> } />
        <Route path="/foodsinformation" element={ <ShowInfo /> } />
        {/* <Redirect from="/foodsinformation/" to="/buy/" /> */}
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);