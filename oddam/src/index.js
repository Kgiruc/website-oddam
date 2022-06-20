import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes ,  Route} from "react-router-dom";
import './scss/main.scss';
import Home from "./components /Home";
import Sign from "./components /Sign";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign" element={<Sign />} />

        </Routes>
    </BrowserRouter>
);