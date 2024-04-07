import React, { Component } from 'react';
import ContactBlock from "../../contactBlock";
import './contact.css';


class Contact extends Component {
    render() {
        return (
            <>
                <div className="contact">
                    <div className="section">
                        <ContactBlock/>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;