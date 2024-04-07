import React, {Component} from 'react';


class Banner extends Component {
    render() {
        return (
            <div className="banners">
                <img className="banner-pizza" src="static/images/slider/yellow.png" alt="yellow"/>
                <img className="pizza" src="static/images/slider/pizza.png" alt="pizza"/>
            </div>
        )
    }
}

export default Banner;