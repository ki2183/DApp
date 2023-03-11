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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './order.js'

function Window_(probs){

    return <div>

    </div>
}

function App() {
  return (
    <div className="container_category">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainbanner/>}></Route>
                <Route path="/login/" element={<Login/>}></Route>
                <Route path="/joinmember/" element={<JoinMembership/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
