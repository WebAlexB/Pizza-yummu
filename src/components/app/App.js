import React, {Component} from 'react';
import Router from '../router/Router';
import Header from "../header";
import Footer from "../footer";

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
