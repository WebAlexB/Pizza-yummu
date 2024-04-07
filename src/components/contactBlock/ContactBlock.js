import React, { Component } from 'react';
import '../contactBlock/contactBlock.css';


class ContactBlock extends Component {
    render() {
        return (
            <div className="contact-block">
                <div className="map">
                    <img src="static/images/body/map.png" alt="map"/>
                </div>
                <div className="info-contact">
                    <h2>Контакти</h2>
                    <div>
                        <p>Проспект Олександра Поля, 80</p>
                        <p>+3 8 050 343 71 27</p>
                        <p>Щодня 10:00 - 21:00</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactBlock;