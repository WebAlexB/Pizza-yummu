import React, { Component } from 'react';
import './promotions.css';
import TopProduct from "../../topProduct";

class Promotions extends Component {
    render() {
        return (
            <>
                <div className="promotions">
                    <div>
                        <h1>Акції</h1>
                    </div>
                    <div className="section">
                        <TopProduct/>
                    </div>
                </div>
            </>
        );
    }
}

export default Promotions;