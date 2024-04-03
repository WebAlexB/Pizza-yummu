import React, { Component } from 'react';
import './home.css';
import Footer from "../../footer";
import Header from "../../header";
import Section from "../../section";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <Section />
                <Footer/>
            </div>
        );
    }
}

export default Home;