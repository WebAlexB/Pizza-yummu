import React, { Component } from 'react';
import './menu.css';
import Footer from "../../footer";
import Header from "../../header";

class Menu  extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="menu">
                    <h2>Меню</h2>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Menu;