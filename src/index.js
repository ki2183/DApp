import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Serchbar from './Serchbar';
import Nav from './Nav';
import Mainbanner from './Mainbanner';
import Login from './Login';
import JoinMembership from './JoinMembership'
import reportWebVitals from './reportWebVitals';
import Category from './category';
import { BrowserRouter } from 'react-router-dom';
import Order from './order.js'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <App></App>
    {/* <Serchbar></Serchbar> */}
    {/* <Mainbanner></Mainbanner>  */}
    {/* <Login></Login> */}
    {/* <JoinMembership></JoinMembership> */}
    {/* <Category/> */}
    {/* // <Order/> */}

  </React.StrictMode>
);
reportWebVitals();
