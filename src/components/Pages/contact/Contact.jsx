import React, { Component } from 'react';
import ContactBlock from "../../ContactBlock";
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