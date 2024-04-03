import React, { Component } from 'react';
import './contact.css';
import Footer from "../../footer";
import Header from "../../header";


class Contact extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="contact">
                    <h2>Контакти</h2>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Contact;