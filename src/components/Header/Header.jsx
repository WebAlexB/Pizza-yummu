import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render() {
        const { cart, totalCartItems } = this.props;
        const cartItemCount = cart ? Object.values(cart).reduce((total, count) => total + count, 0) : 0;
        return (
            <header className="header-yummu">
                <div className="menu-header">
                    <Link to="/contact">Контакти</Link>
                    <Link to="/menu">Меню</Link>
                    <Link to="/promotions">Акції</Link>
                </div>
                <div className="logo-header">
                    <Link to="/"><img src="static/images/logo/logo_pizza.png" alt="logo"/></Link>
                </div>
                <div className="info-header">
                    <div>
                        <div className="info">
                            <i><img src="static/images/header/clock.png" alt="logo"/></i><p>Щодня 10:00-21:00</p>
                        </div>
                        <div className="info">
                            <i><img src="static/images/header/Vector.png" alt="logo"/></i><a href="#">+380999999999</a>
                        </div>
                    </div>
                    <div className="card-header">
                        <Link to="/"><img src="static/images/header/card.png" alt="card"/></Link>
                        <span className="cart-count">{totalCartItems}</span>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
