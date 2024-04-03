import React, { Component } from 'react';
import './about.css';
import Footer from "../../footer";
import Header from "../../header";

class About extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="about">
                    <h2>Про Нас</h2>
                </div>
                <Footer/>
            </>
        );
    }
}

export default About;