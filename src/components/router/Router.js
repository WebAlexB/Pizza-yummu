import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Menu from "../pages/menu";
import About from "../pages/about";
import Contact from "../pages/contact";
import Promotions from "../pages/promotions";
import NotFound from "../pages/notFound";

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