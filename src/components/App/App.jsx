// App.js
import React, {Component} from 'react';
import Router from '../Router/Router';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class App extends Component {
    render() {
        const { cart, totalCartItems } = this.props;
        return (
            <div>
                <Header cart={cart} totalCartItems={totalCartItems} />
                <Router/>
                <Footer/>
            </div>
        );
    }
}

export default App;
