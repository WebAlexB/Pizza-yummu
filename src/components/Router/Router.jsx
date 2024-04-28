import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/home";
import Menu from "../Pages/menu";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import Promotions from "../Pages/promotions";
import NotFound from "../Pages/notFound";

class Router extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/promotions" element={<Promotions/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        );
    }
}

export default Router;