import React, { Component } from 'react';
import "../footer/footer.css";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-yummu">
                <div className="logo-footer">
                    <a href="#"><img src="static/images/footer/logo-footer.png" alt="logo"/></a>
                </div>
                <div className="menu-footer">
                    <Link to="/menu">Меню</Link>
                    <Link to="/contact">Контакти</Link>
                    <Link to="/about">Про нас</Link>
                    <Link to="/promotions">Акції</Link>
                </div>
                <div className="social-footer">
                    <a href="#"><img src="static/images/footer/fa.png" alt="fa"/></a>
                    <a href="#"><img src="static/images/footer/in.png" alt="in"/></a>
                </div>
            </footer>
        );
    }
}

export default Footer;