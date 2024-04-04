import React, {Component} from 'react';
import "../topProduct/topProduct.css";

class TopProduct extends Component {
    render() {
        return (
            <div className="top-product">
                <div className="title-top">
                    <div className="title">
                        <h2>Разом Вигідніше</h2>
                    </div>
                    <div className="info-top">
                        <div className="top-item">
                            <div className="top-image">
                                <img src="static/images/body/top.png" alt="top"/>
                            </div>
                            <div className="top-product-name">
                                <div className="content-top first-top">
                                    <p>Піца</p>
                                    <p className="name-top">Molestie</p>
                                </div>
                                <div className="content-top">
                                    <p>+</p>
                                </div>
                                <div className="content-top">
                                    <p>Кава</p>
                                    <p className="name-top">Капучина</p>
                                </div>
                                <button className="button-sent">Замовити</button>
                            </div>
                        </div>
                        <div className="top-item">
                            <div className="top-image">
                                <img src="static/images/body/top.png" alt="top"/>
                            </div>
                            <div className="top-product-name">
                                <div className="content-top first-top">
                                    <p>Піца</p>
                                    <p className="name-top">Molestie</p>
                                </div>
                                <div className="content-top">
                                    <p>+</p>
                                </div>
                                <div className="content-top">
                                    <p>Кава</p>
                                    <p className="name-top">Капучина</p>
                                </div>
                                <button className="button-sent">Замовити</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopProduct;