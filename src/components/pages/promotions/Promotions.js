import React, { Component } from 'react';
import './promotions.css';
import Footer from "../../footer";
import Header from "../../header";

class Promotions extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="promotions">
                    <h2>Акції</h2>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Promotions;