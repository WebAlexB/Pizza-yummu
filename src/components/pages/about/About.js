import React, {Component} from 'react';
import './about.css';
import ContactBlock from "../../contactBlock";

class About extends Component {
    render() {
        return (
            <>
                <div className="about">
                    <div>
                        <div>
                            <h1>Про Нас</h1>
                        </div>
                        <div className='about-block'>
                            <div className='images-about-block'>
                                <div className='block-text'>
                                    <p>
                                        Ласкаво просимо до Pizz Yummu – вашого улюбленого кафе, яке відкрилося у нашому
                                        прекрасному місті Дніпро в 2023 році. Ми раді вітати вас у нашому затишному
                                        закладі,
                                        де
                                        кожна піца – це справжня симфонія смаку та аромату.
                                        У Pizz Yummu ми прагнемо створювати не лише страви, але й незабутні враження для
                                        наших
                                        гостей. Наші кухарі та персонал завжди готові подарувати вам найсмачніші
                                        італійські
                                        страви з вишуканими інгредієнтами та неперевершеним смаком.
                                        У нашому кафе ви зможете насолодитися атмосферою теплого гостинності та
                                        дружнього
                                        обслуговування. Ми завжди тут, щоб зробити ваше перебування в Pizz Yummu
                                        найприємнішим і
                                        комфортним.
                                        Запрошуємо вас завітати до нас та насолодитися кожним ковтком справжньої
                                        італійської
                                        піци в Pizz Yummu – де смак зустрічається з задоволенням!
                                    </p>
                                </div>
                                <img className="about-text" src="static/images/body/about-text-yellow.png"
                                     alt="about-text-yellow"/>
                                <img className="about-pizza" src="static/images/body/about-pizza.png"
                                     alt="about-pizza"/>
                            </div>
                        </div>
                        <div className='image-about-block'>
                            <img className="about-text" src="static/images/body/m-m-m-yummu.png" alt="m-m-m-yummu"/>
                        </div>
                    </div>
                </div>
                <div>
                    <ContactBlock/>
                </div>
            </>
        );
    }
}

export default About;